import nodemailer from "npm:nodemailer@6";

const TO_EMAIL = "hello@carcarediary.com";
const MAX_NAME = 200;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(v: string): boolean {
  return v.length <= MAX_EMAIL && EMAIL_RE.test(v);
}

function json(
  data: Record<string, unknown>,
  status: number,
  cors: Record<string, string>,
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

function buildCorsHeaders(origin: string | null): {
  headers: Record<string, string>;
  allowed: boolean;
} {
  const raw = Deno.env.get("ALLOWED_ORIGINS") || "";
  const allowList = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const allowed =
    allowList.length === 0 || (!!origin && allowList.includes(origin));

  return {
    headers: {
      "Access-Control-Allow-Origin": allowed && origin ? origin : "",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, x-client-info, apikey",
    },
    allowed,
  };
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin");
  const { headers: cors, allowed: originAllowed } = buildCorsHeaders(origin);

  // ── CORS preflight ──────────────────────────────────────────────
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  // ── POST only ───────────────────────────────────────────────────
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405, cors);
  }

  // ── Origin guard ────────────────────────────────────────────────
  const hasAllowList =
    (Deno.env.get("ALLOWED_ORIGINS") || "").trim().length > 0;
  if (hasAllowList && !originAllowed) {
    console.warn("[contact] Blocked: disallowed origin:", origin);
    return json({ error: "Forbidden" }, 403, cors);
  }

  // ── Parse body ──────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request body" }, 400, cors);
  }

  // ── Honeypot ────────────────────────────────────────────────────
  if (body.company) {
    console.info("[contact] Honeypot triggered — silent accept");
    return json({ success: true }, 200, cors);
  }

  // ── Extract & trim ──────────────────────────────────────────────
  const name =
    typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  // ── Required fields ─────────────────────────────────────────────
  if (!name || !email || !message) {
    console.info("[contact] Rejected: missing required field(s)");
    return json(
      { error: "Name, email, and message are required" },
      400,
      cors,
    );
  }

  // ── Max-length checks ──────────────────────────────────────────
  if (name.length > MAX_NAME) {
    return json(
      { error: `Name must be ${MAX_NAME} characters or less` },
      400,
      cors,
    );
  }
  if (email.length > MAX_EMAIL) {
    return json(
      { error: `Email must be ${MAX_EMAIL} characters or less` },
      400,
      cors,
    );
  }
  if (message.length > MAX_MESSAGE) {
    return json(
      { error: `Message must be ${MAX_MESSAGE} characters or less` },
      400,
      cors,
    );
  }

  // ── Email format ────────────────────────────────────────────────
  if (!isValidEmail(email)) {
    console.info("[contact] Rejected: invalid email format");
    return json(
      { error: "Please provide a valid email address" },
      400,
      cors,
    );
  }

  // ── SMTP credentials ───────────────────────────────────────────
  const smtpHost = Deno.env.get("SMTP_HOST");
  const smtpPort = Number(Deno.env.get("SMTP_PORT") || "587");
  const smtpUser = Deno.env.get("SMTP_USER");
  const smtpPass = Deno.env.get("SMTP_PASS");
  const fromEmail = Deno.env.get("SMTP_FROM") || `noreply@carcarediary.com`;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("[contact] SMTP secrets missing — cannot send");
    return json(
      { error: "Email service is not configured" },
      500,
      cors,
    );
  }

  // ── Send via SMTP ──────────────────────────────────────────────
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Support request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    console.info("[contact] Email sent successfully");
    return json({ success: true }, 200, cors);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] SMTP send failed:", msg);
    return json(
      { error: "Failed to send message. Please try again later." },
      502,
      cors,
    );
  } finally {
    try {
      transporter?.close();
    } catch { /* ignore close errors */ }
  }
});

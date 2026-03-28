import nodemailer from "npm:nodemailer@6";

const TO_EMAIL = "hello@carcarediary.com";
const MAX_NAME = 200;
const MAX_EMAIL = 200;
const MAX_VEHICLE = 300;
const MAX_MESSAGE = 3000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SIGN_IN_METHODS = ["email_otp", "google", "apple"];

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
    console.warn("[delete-account] Blocked: disallowed origin:", origin);
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
    console.info("[delete-account] Honeypot triggered - silent accept");
    return json({ success: true }, 200, cors);
  }

  // ── Extract & trim ──────────────────────────────────────────────
  const name =
    typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim() : "";
  const signInMethod =
    typeof body.signInMethod === "string" ? body.signInMethod.trim() : "";
  const confirmed = body.confirmed === true;
  const vehicleInfo =
    typeof body.vehicleInfo === "string" ? body.vehicleInfo.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  // ── Required fields ─────────────────────────────────────────────
  if (!name || !email || !signInMethod) {
    console.info("[delete-account] Rejected: missing required field(s)");
    return json(
      { error: "Name, email, and sign-in method are required" },
      400,
      cors,
    );
  }

  if (!confirmed) {
    console.info("[delete-account] Rejected: deletion not confirmed");
    return json(
      { error: "You must confirm that you are requesting account deletion" },
      400,
      cors,
    );
  }

  // ── Sign-in method validation ─────────────────────────────────
  if (!ALLOWED_SIGN_IN_METHODS.includes(signInMethod)) {
    return json(
      { error: "Invalid sign-in method" },
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
  if (vehicleInfo.length > MAX_VEHICLE) {
    return json(
      { error: `Vehicle info must be ${MAX_VEHICLE} characters or less` },
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
    console.info("[delete-account] Rejected: invalid email format");
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
    console.error("[delete-account] SMTP secrets missing - cannot send");
    return json(
      { error: "Email service is not configured" },
      500,
      cors,
    );
  }

  // ── Build email body ────────────────────────────────────────────
  const signInLabel: Record<string, string> = {
    email_otp: "Email (OTP)",
    google: "Google",
    apple: "Apple",
  };

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Sign-in method: ${signInLabel[signInMethod] || signInMethod}`,
  ];

  if (vehicleInfo) {
    lines.push(`Vehicle: ${vehicleInfo}`);
  }

  lines.push("");
  lines.push("Confirmed: User has requested permanent deletion of their CarCare Diary account and associated data.");

  if (message) {
    lines.push("");
    lines.push("Additional notes:");
    lines.push(message);
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
      subject: `Account deletion request from ${name}`,
      text: lines.join("\n"),
    });

    console.info("[delete-account] Email sent successfully");
    return json({ success: true }, 200, cors);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[delete-account] SMTP send failed:", msg);
    return json(
      { error: "Failed to send request. Please try again later." },
      502,
      cors,
    );
  } finally {
    try {
      transporter?.close();
    } catch { /* ignore close errors */ }
  }
});

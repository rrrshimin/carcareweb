import { useEffect, useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";

type FormStatus = "idle" | "sending" | "success" | "error";

function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "CarCare Diary — Support";
    return () => {
      document.title = "CarCare Diary";
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const res = await fetch(`${supabaseUrl}/functions/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          company,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#0C111F",
        color: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ backgroundColor: "#0051E8" }}
        />
        <div
          className="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ backgroundColor: "#367DFF" }}
        />
      </div>

      <div className="relative z-10">
        <LandingHeader />
        <main className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[560px] mx-auto">
            <h1
              className="text-[28px] md:text-[36px] leading-tight mb-4 text-center"
              style={{ fontWeight: 800 }}
            >
              Support
            </h1>
            <p
              className="text-[16px] leading-relaxed text-center mb-10"
              style={{ color: "#A3ACBF" }}
            >
              Need help with CarCare Diary? Send us a message and we'll get back
              to you by email.
            </p>

            {status === "success" ? (
              <div
                className="rounded-md border p-8 text-center"
                style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
              >
                <CheckCircle
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#34D399" }}
                />
                <h2
                  className="text-[20px] mb-2"
                  style={{ fontWeight: 700 }}
                >
                  Message sent
                </h2>
                <p
                  className="text-[14px] leading-relaxed mb-6"
                  style={{ color: "#A3ACBF" }}
                >
                  Thanks for reaching out. We'll get back to you at{" "}
                  <span className="text-white">{email || "your email"}</span>{" "}
                  as soon as we can.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[14px] transition-colors hover:text-white cursor-pointer"
                  style={{ color: "#367DFF", fontWeight: 600 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-md border p-6 md:p-8 flex flex-col gap-5"
                style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
              >
                {/* Honeypot — hidden from humans, visible to bots */}
                <div className="absolute opacity-0 pointer-events-none" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={200}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] placeholder:text-[#4A5568]"
                    style={{ backgroundColor: "#0C111F", borderColor: "#1F2740" }}
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={200}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] placeholder:text-[#4A5568]"
                    style={{ backgroundColor: "#0C111F", borderColor: "#1F2740" }}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={5000}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] resize-y min-h-[120px] placeholder:text-[#4A5568]"
                    style={{ backgroundColor: "#0C111F", borderColor: "#1F2740" }}
                    placeholder="How can we help?"
                  />
                </div>

                {status === "error" && (
                  <div
                    className="flex items-start gap-3 rounded-md border px-4 py-3"
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                      borderColor: "rgba(239, 68, 68, 0.25)",
                    }}
                  >
                    <AlertCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#EF4444" }}
                    />
                    <p className="text-[14px]" style={{ color: "#FCA5A5" }}>
                      {errorMsg || "Something went wrong. Please try again."}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-[15px] text-white transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer"
                  style={{ backgroundColor: "#0051E8", fontWeight: 600 }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}

            <p
              className="text-[14px] text-center mt-8"
              style={{ color: "#A3ACBF" }}
            >
              You can also reach us at{" "}
              <a
                href="mailto:hello@carcarediary.com"
                className="transition-colors hover:text-white"
                style={{ color: "#367DFF" }}
              >
                hello@carcarediary.com
              </a>
            </p>
          </div>
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

export default SupportPage;

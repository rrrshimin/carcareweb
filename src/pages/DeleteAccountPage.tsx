import { useEffect, useState } from "react";
import {
  Trash2,
  CheckCircle,
  AlertCircle,
  Loader2,
  Smartphone,
} from "lucide-react";
import { LandingHeader } from "./landing/LandingHeader";
import { LandingFooter } from "./landing/LandingFooter";

type FormStatus = "idle" | "sending" | "success" | "error";

const SIGN_IN_OPTIONS = [
  { value: "", label: "Select your sign-in method" },
  { value: "email_otp", label: "Email (OTP)" },
  { value: "google", label: "Google" },
  { value: "apple", label: "Apple" },
];

function DeleteAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signInMethod, setSignInMethod] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "CarCare Diary - Delete Account";
    return () => {
      document.title = "CarCare Diary";
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !signInMethod ||
      !confirmed
    )
      return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const res = await fetch(`${supabaseUrl}/functions/v1/delete-account`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          signInMethod,
          confirmed,
          vehicleInfo: vehicleInfo.trim(),
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
      setSignInMethod("");
      setConfirmed(false);
      setVehicleInfo("");
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
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px]"
          style={{ backgroundColor: "#0051E8" }}
        />
        <div
          className="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.02] blur-[100px]"
          style={{ backgroundColor: "#367DFF" }}
        />
      </div>

      <div className="relative z-10">
        <LandingHeader />
        <main className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[640px] mx-auto">
            {/* ── Hero ─────────────────────────────────────────── */}
            <h1
              className="text-[28px] md:text-[36px] leading-tight mb-4 text-center"
              style={{ fontWeight: 800 }}
            >
              Delete your CarCare Diary account
            </h1>
            <p
              className="text-[16px] leading-relaxed text-center mb-10"
              style={{ color: "#A3ACBF" }}
            >
              You can delete your account directly in the app. If you no longer
              have access to the app, use the form below to request account
              deletion.
            </p>

            {/* ── In-app path ──────────────────────────────────── */}
            <div
              className="rounded-md border p-5 md:p-6 mb-6"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <div className="flex items-start gap-3">
                <Smartphone
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#367DFF" }}
                />
                <div>
                  <h2
                    className="text-[16px] mb-1"
                    style={{ fontWeight: 700 }}
                  >
                    Delete in the app
                  </h2>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#A3ACBF" }}
                  >
                    Open CarCare Diary and go to{" "}
                    <span className="text-white" style={{ fontWeight: 600 }}>
                      Account &gt; Delete my account
                    </span>
                    . This is the fastest way to delete your account and
                    associated data.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Data handling info ───────────────────────────── */}
            <div
              className="rounded-md border p-5 md:p-6 mb-10"
              style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
            >
              <h2
                className="text-[16px] mb-3"
                style={{ fontWeight: 700 }}
              >
                What happens to your data
              </h2>
              <ul
                className="flex flex-col gap-2.5 text-[14px] leading-relaxed"
                style={{ color: "#A3ACBF" }}
              >
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1 shrink-0">•</span>
                  <span>
                    When your account deletion request is processed, your user
                    account, vehicle data, and maintenance history are deleted.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1 shrink-0">•</span>
                  <span>
                    Limited technical records may be retained where necessary for
                    security, fraud prevention, legal compliance, or system
                    integrity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1 shrink-0">•</span>
                  <span>
                    If you used the app as a guest only, deleting your vehicle in
                    the app removes vehicle data. Some technical device-level
                    records may remain.
                  </span>
                </li>
              </ul>
            </div>

            {/* ── Form section title ───────────────────────────── */}
            <h2
              className="text-[20px] md:text-[24px] leading-tight mb-2 text-center"
              style={{ fontWeight: 700 }}
            >
              Request account deletion
            </h2>
            <p
              className="text-[14px] leading-relaxed text-center mb-6"
              style={{ color: "#A3ACBF" }}
            >
              Use this form if you can no longer access the app.
            </p>

            {/* ── Success state ────────────────────────────────── */}
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
                  Request sent
                </h2>
                <p
                  className="text-[14px] leading-relaxed mb-6"
                  style={{ color: "#A3ACBF" }}
                >
                  We've received your account deletion request. We'll review it
                  and follow up at{" "}
                  <span className="text-white">{email || "your email"}</span>{" "}
                  as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[14px] transition-colors hover:text-white cursor-pointer"
                  style={{ color: "#367DFF", fontWeight: 600 }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              /* ── Form ─────────────────────────────────────────── */
              <form
                onSubmit={handleSubmit}
                className="rounded-md border p-6 md:p-8 flex flex-col gap-5"
                style={{ backgroundColor: "#141A2B", borderColor: "#1F2740" }}
              >
                {/* Honeypot */}
                <div
                  className="absolute opacity-0 pointer-events-none"
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                >
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

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="del-name"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Full name
                  </label>
                  <input
                    id="del-name"
                    type="text"
                    required
                    maxLength={200}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] placeholder:text-[#4A5568]"
                    style={{
                      backgroundColor: "#0C111F",
                      borderColor: "#1F2740",
                    }}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="del-email"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Email address
                  </label>
                  <input
                    id="del-email"
                    type="email"
                    required
                    maxLength={200}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] placeholder:text-[#4A5568]"
                    style={{
                      backgroundColor: "#0C111F",
                      borderColor: "#1F2740",
                    }}
                    placeholder="Email associated with your account"
                  />
                </div>

                {/* Sign-in method */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="del-signin"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Sign-in method
                  </label>
                  <select
                    id="del-signin"
                    required
                    value={signInMethod}
                    onChange={(e) => setSignInMethod(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] appearance-none"
                    style={{
                      backgroundColor: "#0C111F",
                      borderColor: "#1F2740",
                      color: signInMethod ? "#FFFFFF" : "#4A5568",
                    }}
                  >
                    {SIGN_IN_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vehicle info (optional) */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="del-vehicle"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Vehicle name / make-model{" "}
                    <span style={{ color: "#4A5568", fontWeight: 400 }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    id="del-vehicle"
                    type="text"
                    maxLength={300}
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] placeholder:text-[#4A5568]"
                    style={{
                      backgroundColor: "#0C111F",
                      borderColor: "#1F2740",
                    }}
                    placeholder="e.g. My Honda Civic 2022"
                  />
                </div>

                {/* Additional message (optional) */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="del-message"
                    className="text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    Additional notes{" "}
                    <span style={{ color: "#4A5568", fontWeight: 400 }}>
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="del-message"
                    maxLength={3000}
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "sending"}
                    className="w-full rounded-md border px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-[#367DFF] resize-y min-h-[80px] placeholder:text-[#4A5568]"
                    style={{
                      backgroundColor: "#0C111F",
                      borderColor: "#1F2740",
                    }}
                    placeholder="Anything else we should know?"
                  />
                </div>

                {/* Confirmation checkbox */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    disabled={status === "sending"}
                    required
                    className="mt-1 shrink-0 w-4 h-4 rounded accent-[#0051E8] cursor-pointer"
                  />
                  <span
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#A3ACBF" }}
                  >
                    I confirm that I am requesting permanent deletion of my
                    CarCare Diary account and all associated data.
                  </span>
                </label>

                {/* Error state */}
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

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-[15px] text-white transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer"
                  style={{ backgroundColor: "#DC2626", fontWeight: 600 }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending request…
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Request account deletion
                    </>
                  )}
                </button>
              </form>
            )}

            <p
              className="text-[14px] text-center mt-8"
              style={{ color: "#A3ACBF" }}
            >
              Need help instead? Contact us at{" "}
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

export default DeleteAccountPage;

import { Apple } from "lucide-react";

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-[10px] border border-[#1F2740] transition-colors hover:border-[#367DFF] ${className}`}
      style={{ backgroundColor: "#141A2B" }}
    >
      <Apple className="w-6 h-6 text-white fill-white" />
      <div className="flex flex-col">
        <span className="text-[11px] leading-tight" style={{ color: "#A3ACBF" }}>
          Download on the
        </span>
        <span className="text-[15px] leading-tight text-white" style={{ fontWeight: 600 }}>
          App Store
        </span>
      </div>
    </a>
  );
}

export function GooglePlayButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-[10px] border border-[#1F2740] transition-colors hover:border-[#367DFF] ${className}`}
      style={{ backgroundColor: "#141A2B" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.382.226-.72.609-.92z" fill="#4285F4" />
        <path d="M17.545 8.248L5.187.774C4.582.423 3.87.406 3.609 1.814L13.792 12l3.753-3.752z" fill="#EA4335" />
        <path d="M3.609 22.186c.261 1.408.973 1.391 1.578 1.04l12.358-7.474-3.753-3.752L3.61 22.186z" fill="#34A853" />
        <path d="M21.005 10.268l-3.46-2.02L13.792 12l3.753 3.752 3.46-2.02c.88-.536.88-2.928 0-3.464z" fill="#FBBC04" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[11px] leading-tight" style={{ color: "#A3ACBF" }}>
          GET IT ON
        </span>
        <span className="text-[15px] leading-tight text-white" style={{ fontWeight: 600 }}>
          Google Play
        </span>
      </div>
    </a>
  );
}

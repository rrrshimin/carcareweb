import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Header } from "../components/Header";

function NotFoundPage() {
  useEffect(() => {
    document.title = "CarCare Diary – Page Not Found";
    return () => {
      document.title = "CarCare Diary";
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex min-h-screen items-center justify-center px-4 pt-14">
        <div className="mx-auto w-full max-w-sm text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
              <MapPin className="h-9 w-9 text-blue-400" />
            </div>
          </div>

          <p className="mb-1 text-5xl font-extrabold tracking-tight text-gray-200 sm:text-6xl">
            404
          </p>

          <h1 className="mt-3 text-xl font-semibold text-gray-800 sm:text-2xl">
            Page not found
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            The page you're looking for doesn't exist or the link may have
            changed.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate(-1)}
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition hover:bg-gray-50 sm:w-auto"
            >
              Go back
            </button>
            <a
              href="/"
              className="w-full rounded-xl bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
            >
              Go to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

/// <reference types="vite/client" />

declare module "*.PNG" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string | undefined;
  readonly VITE_SUPABASE_ANON_KEY: string | undefined;
  readonly VITE_POSTHOG_KEY: string | undefined;
  readonly VITE_POSTHOG_HOST: string | undefined;
}

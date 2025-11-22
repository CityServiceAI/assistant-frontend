export const env = {
  apiBaseUrl: import.meta.env.DEV 
    ? '/api' 
    : (import.meta.env.VITE_API_BASE_URL as string) || '/api',
  appEnv: (import.meta.env.VITE_APP_ENV as string) ?? 'development',
};

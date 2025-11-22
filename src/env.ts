export const env = {
  apiBaseUrl: import.meta.env.DEV 
    ? '/api' 
    : '/api',
  appEnv: (import.meta.env.VITE_APP_ENV as string) ?? 'development',
};

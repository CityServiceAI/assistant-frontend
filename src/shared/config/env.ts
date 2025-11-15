export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string,
  appEnv: (import.meta.env.VITE_APP_ENV as string) ?? 'development',
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      EXPO_PUBLIC_API_BASE_URL: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};

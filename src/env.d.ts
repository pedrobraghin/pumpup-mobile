declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      NODE_ENV: 'development' | 'production';
      EXPO_PUBLIC_LOGIN_IMAGE_URL: string;
    }
  }
}

export {};

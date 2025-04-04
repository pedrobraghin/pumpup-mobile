import { Routes } from '@/@types/routes';
import { router } from 'expo-router';
import { useCallback } from 'react';

export function useNavigation() {
  const navigate = useCallback((path: Routes) => {
    router.push(path);
  }, []);

  const back = useCallback(() => {
    router.back();
  }, []);

  return {
    navigate,
    back,
  };
}

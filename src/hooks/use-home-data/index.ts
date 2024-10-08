import api from '@/services/api';
import { useCallback } from 'react';
import { UseHomeData } from './types';

export function useHomeData(): UseHomeData {
  const fetchHomeData = useCallback(async () => {
    const response = await api.trainApi.getUserTrains();

    if (!response.success) {
      // to-do handle commom error
      return;
    }

    return response.data;
  }, []);

  return {
    fetchHomeData,
  };
}

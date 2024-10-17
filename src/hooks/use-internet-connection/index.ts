import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export function useInternetConnection() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(Boolean(state.isConnected));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isConnected,
  };
}

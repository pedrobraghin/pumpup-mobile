import { Routes } from '@/@types/routes';
import { useNavigation } from '@/hooks';
import { useAuth } from '@clerk/clerk-expo';
import { useCallback } from 'react';

export function useProfileListHandlers() {
  const { signOut } = useAuth();
  const { navigate } = useNavigation();

  const handleUpdateProfile = useCallback(() => {}, []);

  const handleUserData = useCallback(() => {}, []);

  const handleChangeLanguage = useCallback(() => {
    navigate(Routes.changeLanguage);
  }, []);

  const handleChangeUnitsOfMeasurement = useCallback(() => {}, []);

  const handleOpenInstagram = useCallback(() => {}, []);

  const handleOpenWebsite = useCallback(() => {}, []);

  const handleOpenTermsNPolitics = useCallback(() => {}, []);

  const handleReportBug = useCallback(() => {}, []);

  const handleLogout = useCallback(async () => {
    await signOut();
  }, []);

  return {
    handleUpdateProfile,
    handleUserData,
    handleChangeLanguage,
    handleChangeUnitsOfMeasurement,
    handleOpenInstagram,
    handleOpenWebsite,
    handleOpenTermsNPolitics,
    handleReportBug,
    handleLogout,
  };
}

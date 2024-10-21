import {CreateUserData, UseUser} from "@/hooks/use-user/types";
import {useCallback} from "react";
import api from "@/services/api";
import {useUser} from "@clerk/clerk-expo";

export function useUserData(): UseUser {
  const {user} = useUser();
  const createUser = useCallback(async () => {
    const userData: CreateUserData = {
      pictureUrl: user?.hasImage ? user.imageUrl : '',
      email: user?.emailAddresses[0]?.emailAddress ?? '',
      name: user?.fullName ?? '',
      providerId: user?.id ?? ''
    }

    const response = await api.userApi.createUser(userData);
    if (!response.success) {
      // to-do handle commom error
      return;
    }

    return response.data;
  }, [user])

  const fetchUserData = useCallback(async (id: string) => {
    const response = await api.userApi.getUser(id);
    if (!response.success) {
      // to-do handle commom error
      return;
    }

    return response.data;
  }, [])

  return {
    createUser,
    fetchUserData,
  }
}
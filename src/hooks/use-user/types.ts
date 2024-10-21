export type CreateUserResponseData = {
  name: string;
  email: string;
  pictureUrl: string;
}

export type GetUserResponseData = {
  id: string;
  name: string;
  email: string;
  pictureUrl: string;
  providerId: string;
  active: boolean;
}

export type CreateUserData = {
  name: string;
  email: string;
  providerId: string;
  pictureUrl?: string;
}

export type UseUser = {
  createUser: () => Promise<CreateUserResponseData | undefined>;
  fetchUserData: (id: string) => Promise<GetUserResponseData | undefined>;
}
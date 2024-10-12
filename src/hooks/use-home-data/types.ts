export type UserData = {
  name: string;
};

export type Train = {
  name: string;
  exercicesCount: number;
};

export type FetchHomeData = {
  user: UserData;
  trains: Array<Train>;
};

export type UseHomeData = {
  fetchHomeData: () => Promise<Train[] | undefined>;
};

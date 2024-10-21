import {UserResponseData} from "@/hooks/use-user/types";

export type Train = {
  name: string;
  exercicesCount: number;
};

export type FetchHomeData = {
  user: UserResponseData;
  trains: Array<Train>;
};

export type UseHomeData = {
  fetchHomeData: () => Promise<Train[] | undefined>;
};

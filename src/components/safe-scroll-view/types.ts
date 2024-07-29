import { HeaderProps } from "../header/types";

export type SafeScrollViewProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
};

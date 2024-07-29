import { HeaderProps } from "../header/types";

export type SafeViewProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
};

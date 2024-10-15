export type SelectorData = {
  value: string;
  label: string;
  icon?: React.JSX.Element;
  text?: string;
  smallIcon?: React.JSX.Element;
};

export type SelectorProps = {
  onSelect: (value: string) => void;
  data: SelectorData[];
  withText?: boolean;
  initalState: SelectorData;
};

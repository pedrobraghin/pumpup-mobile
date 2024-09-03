export type SelectorData = {
  value: string;
  label: string;
  icon?: React.JSX.Element;
};

export type SelectorProps = {
  onSelect: (value: string) => void;
  data: SelectorData[];
  initalState: SelectorData;
};

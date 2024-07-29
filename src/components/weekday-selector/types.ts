import { weekdays } from "./consts";

export type WeekdaySelectorProps = {
  onSelect: (weekday: string) => void;
  hasError?: boolean;
  error?: string;
};

export type Weekday = (typeof weekdays)[number];

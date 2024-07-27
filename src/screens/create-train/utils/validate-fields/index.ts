import { ValidateFieldsResult } from "./types";

export function validate(name: string, weekday: string): ValidateFieldsResult {
  return {
    name: !name.trim(),
    weekday: !weekday.trim(),
  };
}

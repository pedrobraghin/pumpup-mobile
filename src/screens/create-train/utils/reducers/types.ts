import { ValidateFieldsResult } from "../validate-fields/types";

export type ErrorsAction =
  | { type: ErrorsActions.SET_ERRORS; payload: ValidateFieldsResult }
  | { type: ErrorsActions.RESET_ERRORS };

export enum ErrorsActions {
  SET_ERRORS = "SET_ERRORS",
  RESET_ERRORS = "RESET_ERRORS",
}

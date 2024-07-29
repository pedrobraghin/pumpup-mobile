import { ValidateFieldsResult } from "../validate-fields/types";
import { type ErrorsAction, ErrorsActions } from "./types";

export const errorsInitialState: ValidateFieldsResult = {
  name: false,
  weekday: false,
};

export function errorsReducer(
  state: ValidateFieldsResult,
  action: ErrorsAction
): ValidateFieldsResult {
  switch (action.type) {
    case ErrorsActions.SET_ERRORS:
      return { ...state, ...action.payload };
    case ErrorsActions.RESET_ERRORS:
      return errorsInitialState;
    default:
      return state;
  }
}

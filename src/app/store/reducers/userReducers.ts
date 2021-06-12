import { user } from "src/app/model/user";
import { userDetaialsAction, UserActionTypes } from "../actions/userActions";

export interface State {
  user: user[];
}
export const initialState: State = {
  user: [],
};

export function userDetailsReducer(
  state = initialState,
  action: userDetaialsAction
): State {
  switch (action.type) {
    case UserActionTypes.LoadAction:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

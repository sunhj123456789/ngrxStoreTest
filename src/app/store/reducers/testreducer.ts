import { user } from "src/app/model/user";
import { userDetaialsAction, UserActionTypes } from "../actions/userActions";
import { AppState, InfoReduceState } from "../selector/selector";

export const initialState: InfoReduceState = {
infoName:'Info'
};

export function testReducer(
  state = initialState,
  action: userDetaialsAction
): InfoReduceState {
  switch (action.type) {
    case UserActionTypes.InfoAction:
      return { ...state, infoName: action.payload };
    default:
      return state;
  }
}

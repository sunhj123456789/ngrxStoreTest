import { user } from "src/app/model/user";
import { userDetaialsAction, UserActionTypes } from "../actions/userActions";
import { AppState, UserReduceState } from "../selector/selector";

export const initialState: UserReduceState = {
  user:[{
  name: 'sundar',
  rollno: 33,
  department: 'CSE'
  }],
};

export function userDetailsReducer(
  state = initialState,
  action: userDetaialsAction
): UserReduceState {
  switch (action.type) {
    case UserActionTypes.LoadAction:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

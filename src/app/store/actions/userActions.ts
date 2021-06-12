import { Action } from "@ngrx/store";
import { user } from "src/app/model/user";
export enum UserActionTypes {
  LoadAction = "[Load] Action",
}
export class userLoad implements Action {
  readonly type = UserActionTypes.LoadAction;
  constructor(public payload: user[]) {}
}

export type userDetaialsAction = userLoad;

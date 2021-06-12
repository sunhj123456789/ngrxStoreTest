import { Action } from "@ngrx/store";
import { user } from "src/app/model/user";
export enum UserActionTypes {
  LoadAction = "[Load] Action",
  InfoAction = "[Load] Info",
}
export class userLoad implements Action {
  readonly type = UserActionTypes.LoadAction;
  constructor(public payload: user[]) {}
}

export class InfoLoad implements Action {
  readonly type = UserActionTypes.InfoAction;
  constructor(public payload: string) {}
}

export type userDetaialsAction = userLoad | InfoLoad;

import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { user } from "src/app/model/user";
// import { userDetailsReducer } from "../reducers/userReducers";
import * as fromDetailsReducer from "../reducers/userReducers";
import * as fromtestReducer from "../reducers/testreducer";

export interface UserReduceState {
  user: user[];
}

export interface InfoReduceState {
  infoName:string;
}

export interface AppState {
  user: UserReduceState;
  infoName: InfoReduceState;
}


export const reducers: ActionReducerMap<AppState> = {
  user:fromDetailsReducer.userDetailsReducer,
  infoName:fromtestReducer.testReducer
};

export const selectAuthState = createFeatureSelector<AppState>('child');

export const rootState = (state: AppState) => state;

export const selectAuthStatusState = createSelector(
  rootState,
  (state: AppState) => state?.user
);
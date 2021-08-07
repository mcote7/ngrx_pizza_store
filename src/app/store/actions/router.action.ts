import { Action } from "@ngrx/store";
import { NavigationExtras } from "@angular/router";

export const GO = '[router] Go';
export const BACK = '[router] Back';
export const FORWARD = '[router] Forward';

export class Go implements Action {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;
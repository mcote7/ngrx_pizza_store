import { Action } from "@ngrx/store";

import { Topping } from "src/products/models/topping.model";

export const LOAD_TOPPINGS = '[products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[products] Load Toppings fail';
export const LOAD_TOPPINGS_SUCCESS = '[products] Load Toppings success';
export const VISUALISE_TOPPINGS = '[PRODUCTS] Visualise Toppings';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
  constructor() {}
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS;
  constructor(public payload: number[]) {}
}

export type ToppingAction = 
  | LoadToppings 
  | LoadToppingsFail 
  | LoadToppingsSuccess 
  | VisualiseToppings;
import { Action } from "@ngrx/store";
import { Pizza } from "../../models/pizza.model";

// load pizzas 
export const LOAD_PIZZAS = '[products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[products] Load Pizzas fail';
export const LOAD_PIZZAS_SUCCESS = '[products] Load Pizzas success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// action types 
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;

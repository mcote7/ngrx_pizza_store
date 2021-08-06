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

// create pizza
export const CRATE_PIZZA = '[products] Create Pizza';
export const CRATE_PIZZA_FAIL = '[products] Create Pizza fail';
export const CRATE_PIZZA_SUCCESS = '[products] Create Pizza success';

export class CreatePizza implements Action {
  readonly type = CRATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CRATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CRATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// update pizza 
export const UPDATE_PIZZA = '[products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[products] Update Pizza fail';
export const UPDATE_PIZZA_SUCCESS = '[products] Update Pizza success';

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// delete pizza 

// action types 
export type PizzasAction = 
| LoadPizzas 
| LoadPizzasFail 
| LoadPizzasSuccess 
| CreatePizza 
| CreatePizzaFail 
| CreatePizzaSuccess 
| UpdatePizza 
| UpdatePizzaFail 
| UpdatePizzaSuccess;

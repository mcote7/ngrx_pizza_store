import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products'); // get products 

// pizzas state 
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas); // get pizza { data[], loaded, loading } 

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas); // pizza data[] only 
export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded); // loaded only 
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading); // loading only 

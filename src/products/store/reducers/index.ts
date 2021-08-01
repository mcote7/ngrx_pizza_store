import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

// create feature selector 
export const getProductsState = createFeatureSelector<ProductsState>('products'); // get products 

// pizzas state selector 
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas); // get pizza { entities{}, loaded, loading } 

// individual | single  state selectors 
export const getAllPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities); // pizza entities{} only 

// convert entities to array for display 
export const getAllPizzas = createSelector(getAllPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[+id]);
});

export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded); // loaded only 
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading); // loading only 

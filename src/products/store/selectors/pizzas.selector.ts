import { createSelector } from "@ngrx/store";

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

import { Pizza } from "src/products/models/pizza.model";


// pizzas state selector 
export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas); // get pizza { entities{}, loaded, loading } 

// individual | single  state selectors 
export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities); // pizza entities{} only 

// get selected pizza from router state params .pizzaId 
export const getSelectedPizza = createSelector(getPizzasEntities, fromRoot.getRouterState, (entities, router): Pizza => {
  return router.state && entities[router.state.params.pizzaId]
});

// convert entities to array for display 
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[+id]);
});

export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded); // loaded only 
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading); // loading only 
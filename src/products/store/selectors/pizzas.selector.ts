import { createSelector } from "@ngrx/store";

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

import { Pizza } from "src/products/models/pizza.model";


// pizzas state selector 
export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas); // get pizza { entities{}, loaded, loading } 

// individual | single  state selectors 
export const getAllPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities); // pizza entities{} only 

// get selected pizza from router state params .pizzaId 
export const getSelectedPizza = createSelector(getAllPizzasEntities, fromRoot.getRouterState, (entities, router): Pizza => {
  return router.state && entities[router.state.params.pizzaId]
})

// convert entities to array for display 
export const getAllPizzas = createSelector(getAllPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[+id]);
});

export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded); // loaded only 
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading); // loading only 
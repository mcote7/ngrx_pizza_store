import { createSelector } from "@ngrx/store";

import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';


// toppings state selector
export const getToppingState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.toppings);

export const getToppingEntities = createSelector(getToppingState, fromToppings.getToppingEntities);

export const getSelectedToppings = createSelector(getToppingState, fromToppings.getSelectedToppings);

export const getAllToppings = createSelector(getToppingEntities, (entities) => {
  return Object.keys(entities).map(id => entities[+id]);
});

export const getToppingsLoaded = createSelector(getToppingState, fromToppings.getToppingLoaded);
export const getToppingsLoading = createSelector(getToppingState, fromToppings.getToppingLoading);

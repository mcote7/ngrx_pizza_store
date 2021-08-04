import * as fromToppings from '../actions/toppings.action';
import { Topping } from 'src/products/models/topping.model';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading:false
}

export function reducer(
  state = initialState,
  action: any ): ToppingsState {

  switch(action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return  {
        ...state,
        loading: true
      };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        }, 
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }
  return state;
};

export const getToppingLoaded = (state: ToppingsState) => state.loaded;
export const getToppingLoading = (state: ToppingsState) => state.loading;
export const getToppingEntities = (state: ToppingsState) => state.entities;

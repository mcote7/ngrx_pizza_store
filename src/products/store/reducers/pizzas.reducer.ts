import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

export interface PizzaState {
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
};

// reducers 
export function reducer(
  state = initialState, 
  action: any ): PizzaState {
  
  switch(action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      // console.log(action.payload);
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
};

// selectors 
export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;


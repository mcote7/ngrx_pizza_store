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

// reducers switch action.type modifys initial State & returns new State 
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
      console.log("Pizzas[] ? :::",action.payload);
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      console.log("load pizzas fail :::",action.payload);
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
};

// selectors > compose state 
export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;


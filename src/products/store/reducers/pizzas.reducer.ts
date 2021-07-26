import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

export interface PizzaState {
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  data: [
    {
      "name": "the initial g",
      "toppings": [
        {
          "id": 1,
          "name": "anchovy"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 2,
          "name": "bacon"
        },
        {
          "id": 6,
          "name": "mushroom"
        },
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 8,
          "name": "onion"
        }
      ],
      "id": 6
    }
  ],
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
      return {
        ...state,
        loading: false,
        loaded: true
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
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
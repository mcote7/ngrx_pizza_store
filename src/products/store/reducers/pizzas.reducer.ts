import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
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
      console.log("Pizzas entity{} ? :::", action.payload);
      const pizzas = action.payload;
      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza
          };
        }, 
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      console.log("load pizzas fail :::", action.payload); // err 
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    // update && create do the same operation 
    case fromPizzas.UPDATE_PIZZA: 
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      // merge payload into exsisting entities 
      const entities = {
        ...state.entities,
        [pizza.id]: pizza
      };
      return {
        ...state,
        entities
      };
    }
    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      // using destructuring to get all entities except for the id one
      const { [pizza.id]: removedPizza, ...entities } = state.entities;
      return {
        ...state,
        entities
      }
    }
  }
  return state;
};

//  compose slices state for Selectors to call
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;


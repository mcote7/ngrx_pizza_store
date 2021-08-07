import * as fromPizzas from './pizzas.reducer';
import * as fromActions from '../actions/pizzas.action';

describe('Pizzas Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const initialState = fromPizzas.initialState;
      const action = {} as any;
      const state = fromPizzas.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });
  
  describe('LOAD_PIZZAS action', () => {
    it('should set loading to true', () => {
      const initialState = fromPizzas;
      const action = new fromActions.LoadPizzas();
      const state = fromPizzas.reducer(undefined, action);
      expect(state.entities).toBe(initialState);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });
  
});
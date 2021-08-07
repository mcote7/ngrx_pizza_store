import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromRoot from '../../../app/store';

import * as fromServices from '../../services';
import * as pizzaActions from '../actions/pizzas.action';

@Injectable()
export class PizzaEffects {

  constructor(
    private actions$: Actions, 
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
  .pipe(switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(err => of(new pizzaActions.LoadPizzasFail(err)))
      )
    })
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA)
  .pipe(
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService.createPizza(pizza)
      .pipe(
        map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
        catchError(err => of(new pizzaActions.CreatePizzaFail(err)))
      )
    })
  );

  @Effect()
  createPizzaSuccess$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS)
  .pipe(
    map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
    map(pizza => {
      return new fromRoot.Go({
        path: ['/products', pizza.id]
      });
    })
  );

  @Effect()
  updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA)
  .pipe(
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzaService.updatePizza(pizza)
      .pipe(
        map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
        catchError(err => of(new pizzaActions.UpdatePizzaFail(err)))
      )
    })
  );
  
  @Effect()
  removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA)
  .pipe(
    map((action: pizzaActions.RemovePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService.removePizza(pizza)
      .pipe(
        map(()=> new pizzaActions.RemovePizzaSuccess(pizza)),
        catchError(err => of(new pizzaActions.RemovePizzaFail(err)))
      )
    })
  );

  @Effect()
  handlePizzaUpdateOrRemoveSuccess$ = this.actions$.ofType(
    pizzaActions.UPDATE_PIZZA_SUCCESS,
    pizzaActions.REMOVE_PIZZA_SUCCESS
  ).pipe(
    map(() => {
      return new fromRoot.Go({
        path: ['/products']
      });
    })
  );

} 

import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";
import * as fromServices from '../../services';
import * as pizzaActions from '../actions/pizzas.action';

@Injectable()
export class PizzaEffects {
  constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(err => of(new pizzaActions.LoadPizzasFail(err)))
        )
      }));
}

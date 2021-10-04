import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { UserActions, UserStore } from '../index';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../../services/src';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userStore: UserStore,
    private userService: UserService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActions.LoadUsers),
    switchMap(() =>
      this.userService.getUsers().pipe(tap((users) => this.userStore.set(users)))
    )
  );
}

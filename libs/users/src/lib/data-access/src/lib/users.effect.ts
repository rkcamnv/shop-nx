import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { UserActions, UserStore } from '../index';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { UserService } from '@shop-nx/users/src/lib/services';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DetailComponent } from '@shop-nx/users';


@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userStore: UserStore,
    private userService: UserService,
    private toast: ToastrService,
    private modal: NzModalService,
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActions.LoadUsers),
    switchMap(() =>
      this.userService
        .getUsers()
        .pipe(tap((users) => this.userStore.set(users)))
    )
  );

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(UserActions.LoadUser),
    switchMap((model) =>
      this.userService
        .getUser(model.id)
        .pipe(
          tap((user) => this.userStore.add(user)),
          catchError(() => of(''))
        )
    )
  );

  @Effect()
  postUser$ = this.actions$.pipe(
    ofType(UserActions.PostUser),
    switchMap((model) =>
      this.userService.postUser(model.user).pipe(
        tap((user) =>
          this.actions$.dispatch(UserActions.PostUserSuccess({ user }))
        ),
        catchError(() => of(''))
      )
    )
  );

  @Effect()
  postUserSuccess$ = this.actions$.pipe(
    ofType(UserActions.PostUserSuccess),
    tap((model) => {
      this.userStore.add(model.user);

      this.toast.success('Created user!', 'Success', {
        progressBar: true,
        timeOut: 2000,
      });
    })
  );

  @Effect()
  putUser$ = this.actions$.pipe(
    ofType(UserActions.PutUser),
    switchMap((model) =>
      this.userService.putUser(model.user).pipe(
        tap(
          (user) =>
            this.actions$.dispatch(UserActions.PostUserSuccess({ user })),
          catchError(() => of(''))
        )
      )
    )
  );

  @Effect()
  putUserSuccess$ = this.actions$.pipe(
    ofType(UserActions.PutUserSuccess),
    tap((model) => {
      this.userStore.update(model.user.id, model.user);

      this.toast.success('Updated user!', 'Success', {
        progressBar: true,
        timeOut: 2000,
      });
    })
  );

  @Effect()
  deleteUser$ = this.actions$.pipe(
    ofType(UserActions.DeleteUser),
    switchMap((model) =>
      this.userService.deleteUser(model.id).pipe(
        tap((user) =>
          this.actions$.dispatch(UserActions.DeleteUserSuccess({ id: user.id }))
        ),
        catchError(() => of(''))
      )
    )
  );

  @Effect()
  deleteUserSuccess$ = this.actions$.pipe(
    ofType(UserActions.DeleteUserSuccess),
    tap((model) => {
      this.userStore.remove(model.id);

      this.toast.success('Deleted user!', 'Success', {
        progressBar: true,
        timeOut: 2000,
      });
    })
  );

  @Effect()
  openModalDetail$ = this.actions$.pipe(
    ofType(UserActions.OpenModalDetail),
    exhaustMap(model =>{
      const modalRef = this.modal.create({
        nzTitle: 'Modal Title',
        nzContent: DetailComponent,
        nzComponentParams: {
          id: model.id
        },
        nzFooter: null
      });

      return modalRef.afterClose;
    })
  );
}

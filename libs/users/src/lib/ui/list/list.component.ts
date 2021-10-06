import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserActions, UserQuery } from '@shop-nx/users/src/lib/data-access';
import { ID } from '@datorama/akita';

@Component({
  selector: 'shop-nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  vm$ = this.userQuery.users$;

  constructor(private actions: Actions, private userQuery: UserQuery) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.actions.dispatch(UserActions.LoadUsers());
  }

  public deleteUser(id: ID) {
    this.actions.dispatch(UserActions.DeleteUser({ id }));
  }

  public openModelDetail(id: ID) {
    this.actions.dispatch(UserActions.OpenModalDetail({ id }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserActions, UserQuery } from '@shop-nx/users/src/lib/data-access';

@Component({
  selector: 'shop-nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  vm$ = this.userQuery.users$;

  constructor(
    private actions:Actions,
    private userQuery:UserQuery
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.actions.dispatch(UserActions.LoadUsers());
  }

}

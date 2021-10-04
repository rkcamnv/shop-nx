import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserState, UserStore } from './users.store';
import { ModelUser } from '@shop-nx/shared/models';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState, ModelUser> {
  constructor(protected store: UserStore) {
    super(store);
  }

  users$ = combineLatest([this.selectAll(), this.selectLoading()]).pipe(
    map(users)
  );
}

function users([users, loading]: [ModelUser[], boolean]) {
  return {
    users,
    loading,
  };
}

import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ModelUser } from '@shop-nx/shared/models';

export type UserState = EntityState<ModelUser>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-store' })
export class UserStore extends EntityStore<UserState, ModelUser> {
  constructor() {
    super();
  }
}

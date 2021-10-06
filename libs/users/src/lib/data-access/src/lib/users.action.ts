import { createAction, props } from '@datorama/akita-ng-effects';
import { ModelUser } from '@shop-nx/shared/models';
import { ID } from '@datorama/akita';

export const LoadUsers = createAction('[Users] Load All Users');

export const LoadUser = createAction(
  '[Users] Load A User',
  props<{ id: ID }>()
);

export const PostUser = createAction(
  '[Users] Post A User',
  props<{ user: ModelUser }>()
);

export const PostUserSuccess = createAction(
  '[Users] Post A User Success',
  props<{ user: ModelUser }>()
);

export const PutUser = createAction(
  '[Users] Put A User',
  props<{ user: ModelUser }>()
);

export const PutUserSuccess = createAction(
  '[Users] Put A User Success',
  props<{ user: ModelUser }>()
);

export const DeleteUser = createAction(
  '[Users] Delete A User',
  props<{ id: ID }>()
);

export const DeleteUserSuccess = createAction(
  '[Users] Delete A User Success',
  props<{ id: ID }>()
);

export const OpenModalDetail = createAction(
  '[Users] Open Modal Detail',
  props<{ id: ID }>()
);

import { createAction, props } from '@datorama/akita-ng-effects';
import { ID } from '@datorama/akita';
import { ModelProduct } from '@shop-nx/shared/models';

export const LoadProducts = createAction('[Product] Load All Products');

export const LoadProduct = createAction(
  '[Product] Load A Product',
  props<{ id: ID }>()
);

export const PostProduct = createAction(
  '[Product] Post A Product',
  props<{ product: ModelProduct }>()
);

export const PostProductSuccess = createAction(
  '[Product] Post A Product Success',
  props<{ product: ModelProduct }>()
);

export const PutProduct = createAction(
  '[Product] Put A Product',
  props<{ product: ModelProduct }>()
);

export const PutProductSuccess = createAction(
  '[Product] Put A Product Success',
  props<{ product: ModelProduct }>()
);

export const DeleteProduct = createAction(
  '[Product] Delete A Product',
  props<{ id: ID }>()
);

export const DeleteProductSuccess = createAction(
  '[Product] Delete A Product Success',
  props<{ id: ID }>()
);

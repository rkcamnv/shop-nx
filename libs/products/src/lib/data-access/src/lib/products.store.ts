import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ModelProduct } from '@shop-nx/shared/models';
import { Injectable } from '@angular/core';

export type ProductState = EntityState<ModelProduct>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product-store' })
export class ProductStore extends EntityStore<ProductState, ModelProduct> {
  constructor() {
    super();
  }
}

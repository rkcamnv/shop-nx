import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductState, ProductStore } from './products.store';
import { ModelProduct } from '@shop-nx/shared/models';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState, ModelProduct> {
  constructor(protected store: ProductStore) {
    super(store);
  }

  products$ = combineLatest([this.selectAll(), this.selectLoading()]).pipe(
    map(products)
  );
}

function products([products, loading]: [ModelProduct[], boolean]) {
  return {
    products,
    loading,
  };
}

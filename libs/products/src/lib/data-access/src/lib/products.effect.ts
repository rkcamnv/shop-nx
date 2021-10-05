import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { ProductAction, ProductStore } from '../index';
import { switchMap, tap } from 'rxjs/operators';
import { ProductService } from '@shop-nx/products/src/lib/service';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productStore: ProductStore,
    private productService: ProductService
  ) {}

  @Effect()
  loadAllProducts$ = this.actions$.pipe(
    ofType(ProductAction.LoadProducts),
    switchMap(() =>
      this.productService
        .getProducts()
        .pipe(tap((products) => this.productStore.set(products)))
    )
  );
}

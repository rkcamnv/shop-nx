import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { ProductAction, ProductStore } from '../index';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { ProductService } from '@shop-nx/products/src/lib/service';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productStore: ProductStore,
    private productService: ProductService,
    private toast: ToastrService
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

  @Effect()
  loadProduct$ = this.actions$.pipe(
    ofType(ProductAction.LoadProduct),
    switchMap((model) =>
      this.productService.getProduct(model.id).pipe(
        tap((product) => this.productStore.add(product)),
        catchError(() => of(''))
      )
    )
  );

  @Effect()
  postProduct$ = this.actions$.pipe(
    ofType(ProductAction.PostProduct),
    switchMap((model) =>
      this.productService.postProduct(model.product).pipe(
        tap((product) =>
          this.actions$.dispatch(ProductAction.PostProductSuccess({ product }))
        ),
        catchError(() => of(''))
      )
    )
  );

  @Effect()
  postProductSuccess$ = this.actions$.pipe(
    ofType(ProductAction.PostProductSuccess),
    tap((model) => {
      this.productStore.add(model.product);

      this.toast.success('Created product!', 'Success', {
        progressBar: true,
        timeOut: 2000,
      });
    })
  );

  @Effect()
  putProduct$ = this.actions$.pipe(
    ofType(ProductAction.PutProduct),
    switchMap((model) =>
      this.productService.putProduct(model.product).pipe(
        tap((product) =>
          this.actions$.dispatch(ProductAction.PutProductSuccess({ product }))
        ),
        catchError(() => of(''))
      )
    )
  );

  @Effect()
  putProductSuccess$ = this.actions$.pipe(
    ofType(ProductAction.PutProductSuccess),
    tap((model) => {
      this.productStore.update(model.product.id, model.product);

      this.toast.success('Updated product!', 'Success', {
        progressBar: true,
        timeOut: 2000,
      });
    })
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(ProductAction.DeleteProduct),
    switchMap((model) =>
      this.productService.deleteProduct(model.id).pipe(
        tap((product) =>
          this.actions$.dispatch(
            ProductAction.DeleteProductSuccess({ id: product.id })
          )
        ),
        catchError(() => of(''))
      )
    )
  );

  @Effect()
  deleteProductSuccess$ = this.actions$.pipe(
    ofType(ProductAction.DeleteProductSuccess),
    tap((model) => {
      this.productStore.remove(model.id);

      this.toast.success('Deleted product!', 'Success', {
        progressBar: true,
        timeOut: 2000,
      });
    })
  );
}

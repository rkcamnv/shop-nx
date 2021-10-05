import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { ProductAction, ProductQuery } from '../../data-access/src';

@Component({
  selector: 'shop-nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  vm$ = this.productQuery.products$;

  constructor(private actions: Actions, private productQuery: ProductQuery) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.actions.dispatch(ProductAction.LoadProducts());
  }
}

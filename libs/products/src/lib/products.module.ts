import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './ui/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ListComponent },
    ]),
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ProductsModule {}

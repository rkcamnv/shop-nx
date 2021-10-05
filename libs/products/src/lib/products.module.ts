import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './ui/list/list.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { ProductEffect } from './data-access/src';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';

const ANT_DESIGN = [NzTableModule, NzDividerModule, NzImageModule];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN,
    AkitaNgEffectsModule.forFeature([ProductEffect]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ListComponent },
    ]),
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ProductsModule {}

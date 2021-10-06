import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './ui/list/list.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { UserEffect } from '@shop-nx/users/src/lib/data-access';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { DetailComponent } from './ui/detail/detail.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

const ANT_DESIGN = [
  NzTableModule,
  NzDividerModule,
  NzPopconfirmModule,
  NzModalModule,
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN,
    AkitaNgEffectsModule.forFeature([UserEffect]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ListComponent },
    ]),
  ],
  declarations: [ListComponent, DetailComponent],
  exports: [ListComponent, DetailComponent],
})
export class UsersModule {}

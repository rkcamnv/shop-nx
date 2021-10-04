import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AntdIconProviderModule } from '@shop-nx/antd-icon-provider';

const ANT_DESIGN = [AntdIconProviderModule, NzLayoutModule, NzMenuModule];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN,
    RouterModule.forChild([{ path: '', component: LayoutComponent }]),
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}

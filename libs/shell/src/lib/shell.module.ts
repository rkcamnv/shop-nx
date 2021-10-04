import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellWebRoutes } from './shell.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shellWebRoutes)],
})
export class ShellModule {}

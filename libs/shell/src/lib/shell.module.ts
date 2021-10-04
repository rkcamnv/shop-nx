import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellWebRoutes } from './shell.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(shellWebRoutes)],
  exports:[RouterModule]
})
export class ShellModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellModule } from '@shop-nx/shell';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const AKITA=[
  environment.production ? [] : AkitaNgDevtools.forRoot(),
  AkitaNgEffectsModule.forRoot()
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ShellModule,
    HttpClientModule,
    AKITA
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataBindingsModule } from './data-bindings/data-bindings.module';

import lAgTwoRoute from './app.route';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Http404Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    DataBindingsModule,

    lAgTwoRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

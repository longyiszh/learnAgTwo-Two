import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataBindingsModule } from './data-bindings/data-bindings.module';
import { PipeModule } from './pipe/pipe.module';
import { MongoModule } from './mongo/mongo.module';

import { lAgTwoRouting } from './app.route';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';
import { DirectivesComponent } from './directives/directives.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Http404Component,
    DirectivesComponent,
    AnimationComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    DataBindingsModule,
    PipeModule,
    MongoModule,

    lAgTwoRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

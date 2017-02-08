import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { dBindingRouting } from './data-bindings.route';

import { DataBindingsComponent } from './data-bindings.component';
import { DBindIndexComponent } from './d-bind-index/d-bind-index.component';
import { DBind404Component } from './d-bind404/d-bind404.component';
import { IOComponent } from './io/io.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    dBindingRouting
  ],
  declarations: [
    DataBindingsComponent,
    DBindIndexComponent,
    DBind404Component,
    IOComponent
  ]
})
export class DataBindingsModule { }

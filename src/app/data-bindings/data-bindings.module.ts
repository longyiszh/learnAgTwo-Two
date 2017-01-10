import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingsComponent } from './data-bindings.component';
import dBindingRoute from './data-bindings.route';
import { DBindIndexComponent } from './d-bind-index/d-bind-index.component';
import { DBind404Component } from './d-bind404/d-bind404.component'


@NgModule({
  imports: [
    CommonModule,
    
    dBindingRoute
  ],
  declarations: [
    DataBindingsComponent,
    DBindIndexComponent,
    DBind404Component
  ]
})
export class DataBindingsModule { }

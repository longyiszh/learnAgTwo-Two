import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { pipeRouting } from './pipe.route';

import { PipeIndexComponent } from './pipe-index/pipe-index.component';
import { Pipe404Component } from './pipe404/pipe404.component';
import { PipeComponent } from './pipe.component';
import { NamePipe } from './CustomPipes/name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    pipeRouting
  ],
  declarations: [
    PipeComponent,
    PipeIndexComponent,
    Pipe404Component,

    NamePipe
  ]
})
export class PipeModule { }

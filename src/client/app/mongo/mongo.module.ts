import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CdkService } from './cdk.service';

import { mongoRouting } from './mongo.route';

import { MongoComponent } from './mongo.component';
import { MongoIndexComponent } from './mongo-index/mongo-index.component';
import { Mongo404Component } from './mongo404/mongo404.component';

@NgModule({
  imports: [
    CommonModule,

    mongoRouting
  ],
  declarations: [MongoComponent, MongoIndexComponent, Mongo404Component],
  providers: [ CdkService ]
})
export class MongoModule { }

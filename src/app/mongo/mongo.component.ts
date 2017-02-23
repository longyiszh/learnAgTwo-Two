import { Component, OnInit } from '@angular/core';

import { CdkService } from './cdk.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss'],
  providers: [ CdkService ]
})
export class MongoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

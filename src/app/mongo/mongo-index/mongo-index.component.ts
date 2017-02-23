import { Component, OnInit } from '@angular/core';
import { CdkService } from '../cdk.service';

@Component({
  selector: 'app-mongo-index',
  templateUrl: './mongo-index.component.html',
  styleUrls: ['./mongo-index.component.scss'],
  providers: [ CdkService ]
})
export class MongoIndexComponent implements OnInit {

  constructor(private cdkService: CdkService) { }

  public cdks: any = [];

  ngOnInit() {
    // Retrieve posts from the API
    this.cdkService.getAllPosts().subscribe((rescdk) => {
      this.cdks = rescdk;
    });
  }
}

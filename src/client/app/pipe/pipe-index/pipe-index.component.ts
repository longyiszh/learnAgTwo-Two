import { Component, OnInit } from '@angular/core';
import { PipeService } from '../pipe.service';

interface IMedia {
  id: number,
  name: string,
  avatar: string,
  QZone: string,
  QZoneDate: Date,
  Weibo: string,
  WeiboDate: Date,
  Facebook: string,
  FacebookDate: Date
}

@Component({
  selector: 'app-pipe-index',
  templateUrl: './pipe-index.component.html',
  styleUrls: ['./pipe-index.component.scss'],
  providers: [PipeService]
})
export class PipeIndexComponent implements OnInit {

  constructor(private pipeService: PipeService) { }

  ngOnInit() {
    this.pipeService.getMedia().subscribe(
      (resMedia) => { this.seeker = resMedia; },
      (resMediaError) => this.error = resMediaError
    );
  }

  // vanilla pipes data
  name = "This Is a va WebSite";
  tenPI = 31.415926535897932;
  money = 59.99;
  now = new Date();

  //custom pipes data
  term: string = "";
  error: string;
  public seeker: [IMedia];

}

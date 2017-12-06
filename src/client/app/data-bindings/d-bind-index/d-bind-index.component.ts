import { Component, OnInit } from '@angular/core';

import { IOComponent } from '../io/io.component';


@Component({
  selector: 'app-d-bind-index',
  templateUrl: './d-bind-index.component.html',
  styleUrls: ['./d-bind-index.component.scss']
})
export class DBindIndexComponent implements OnInit {

  constructor() { }

  public now: string;
  public classSoH: string = "hidden";

  public email: string;
  public password: string;

  public playList = [
    {
      id: "TESV SE",
      name: "laogun",
      played: true
    },
    {
      id: "SC2Coop",
      name: "SC2terrible",
      played: true
    },
    {
      id: "FCP",
      name: "yuan ku yuan shi ren",
      played: false
    }
  ];

  public playedGames: Object;

  ngOnInit() {
    this.now = this.getNowFormatDate();
  }

  getNowFormatDate() {
      let date = new Date();
      let seperator1 = "-";
      let seperator2 = ":";
      let month: number|string = date.getMonth() + 1;
      let strDate: number|string = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      let currentdate: string = date.getFullYear() + seperator1 + month + seperator1 + strDate
              + " " + date.getHours() + seperator2 + date.getMinutes()
              + seperator2 + date.getSeconds();
      return currentdate;
  }

  alertpa() {
    this.classSoH = "shown";
    console.warn("Your mouse is expensive. Stop it!");
  }

}

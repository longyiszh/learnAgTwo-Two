import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  constructor() { }

  bdk = "";
  sdkList = ["Portal 3", "Fallout New Orleans", "Windows 9 Ultimate", "360安全卫士", "Play Station 8"];
  shapeClass = {rounder: true};
  //paraStyle = { 'font-size': this.fontsize, 'color': this.fontColor, 'font-family': this.fontFamily};
  // --> useless, don't know why.
  fontsize = "20px";
  fontColor = "limegreen";
  fontFamily = "serif";

  ngOnInit() {
  }

  sayThanks() {
      alert("Thank you, have a nice day!");
  }

  requestBDK(Sbdk) {
      this.bdk = Sbdk;
  }

}

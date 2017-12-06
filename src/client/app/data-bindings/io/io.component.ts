import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.scss']
})
export class IOComponent implements OnInit {

  constructor() { }

  @Input() playList: any;
  @Output() onTell = new EventEmitter();

  tell() {
    let gamePlayed: Object = this.playList.filter((game: any) => game.played).map((game: any) => game.name);
    this.onTell.emit(gamePlayed);
  }

  ngOnInit() {
  }

}

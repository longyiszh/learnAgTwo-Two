import { Component, OnInit } from '@angular/core';
// anim stuffs
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off => on', [animate('1s')]),
      transition('on => off', [animate('1s')])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public cdkRoomLightsStatus = {
    "on": "bright",
    "off": "dark"
  };

  public cdkRoomLightCurrent: string = "off";

  toggleLight() {
    this.cdkRoomLightCurrent = (this.cdkRoomLightCurrent === "off")? "on": "off";
  }

}

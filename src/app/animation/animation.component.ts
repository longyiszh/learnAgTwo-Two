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
      // transition('off => on', [animate('1s')]),
      // transition('on => off', [animate('1s')])

      // style仅在当前animate中生效，不会在外面的另外的state中生效。见下面的例子。把角度改为180deg。
      //transition('off <=> on', [animate('2s', style({ transform: 'rotate(360deg)' }))])

      // ease-in: slow->fast, ease-out: fast->slow. full list available in easings.net
      transition('off => on', [animate('2000ms 2s ease-in', style({ transform: 'rotate(360deg)' }))]),
      transition('on => off', [animate('2000ms ease-out', style({ transform: 'rotate(-360deg)' }))])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  promptMsg = {
    shown: false
  };

  public cdkRoomLightsStatus = {
    "on": "bright",
    "off": "dark"
  };

  public cdkRoomLightCurrent: string = "off";

  toggleLight() {
    this.cdkRoomLightCurrent = (this.cdkRoomLightCurrent === "off")? "on": "off";
  }

  report(e) {
    console.log(`Anim from state: ${ e.fromState }`);
    console.log(`Anim to state: ${ e.toState }`);
    console.log(`Anim time elapsed: ${ e.totalTime }`);
  }

  animStart(e) {
    var msg = this.promptMsg;
    msg.shown = true;
    setTimeout("10", function(){msg.shown = false})
    console.log("Animation started");
    this.report(e);
  }

  animEnd(e) {
    this.report(e);
    console.log("Animation ended");
  }

}

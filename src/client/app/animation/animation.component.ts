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
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    /* CDK room */
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
    ]),
    /* BDK room */
    trigger('dimensioner', [
      state('noHeight', style({
        height: 0
      })),
      state('fullHeight', style({
        height: '*' // 意思是让Angular动态计算高度
      })),
      transition('noHeight <=> fullHeight', [animate('2s')])
    ]),
    /* MDK room */
    trigger('groupTrans', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off => on', [group([
        animate('4s ease-in', style({
          transform: 'rotate(360deg)',
        })),
        animate('2s ease-out', style({
          width: '50px'
        }))
      ])]),
      transition('on => off', [group([
        animate('3s 1s ease-in', style({
          transform: 'rotate(3600deg)',
        })),
        animate('4s', style({
          opacity: 0.1
        }))
      ])])
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

  public cdkRoomHeightCurrent: string = "fullHeight";

  toggleHeight() {
    this.cdkRoomHeightCurrent = (this.cdkRoomHeightCurrent === "noHeight")? "fullHeight": "noHeight";
  }

  public mdkRoomLightCurrent: string = "off";

  toggleLightMdk() {
    this.mdkRoomLightCurrent = (this.mdkRoomLightCurrent === "off")? "on": "off";
  }

  report(e: any) {
    console.log(`Anim from state: ${ e.fromState }`);
    console.log(`Anim to state: ${ e.toState }`);
    console.log(`Anim time elapsed: ${ e.totalTime }`);
  }

  animStart(e: any) {
    var msg = this.promptMsg;
    msg.shown = true;
    setTimeout("10", function(){msg.shown = false})
    console.log("Animation started");
    this.report(e);
  }

  animEnd(e: any) {
    this.report(e);
    console.log("Animation ended");
  }

}

import { Component, OnInit } from '@angular/core';


interface IMedia {
  id: number,
  name: string,
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
  styleUrls: ['./pipe-index.component.scss']
})
export class PipeIndexComponent implements OnInit {

  constructor() { }

  // vanilla pipes data
  name = "This Is a WC WebSite";
  tenPI = 31.415926535897932;
  money = 59.99;
  now = new Date();

  //custom pipes data
  term: string = "";
  seeker: [IMedia] = [
    {
      id: 100,
      name: "linruoT",
      QZone: "G*****：新年快乐 百度：[鄙视]",
      QZoneDate: new Date(2016,2,3,11,58,0),
      Weibo: "我参与了@育碧中国 发起的投票 【“刺客信条”手办进中国，你会购买哪一款？】，我投给了“价值398元的“E叔”艾吉奥信仰之跃”这个选项。你也快来表态吧~R“刺客信条”手办进中国，你会购买哪一款？ ​​​​",
      WeiboDate: new Date(2016,8,9,12,29,0),
      Facebook: "感谢祖国，google+能用了！！",
      FacebookDate: new Date(2012,3,4,12,0,0)
    },
    {
      id: 101,
      name: "MILE",
      QZone: "2016年末加了一秒， 他走近我：苟。 我说：苟无新衣裳，曷用光我身。他又说：苟。我回答：苟无济代心，独善亦何益。他摇了摇头：苟。我随即回答他：苟利于民，不必法古。他拿出一席红衣：苟? 我一时竟不知如何回答，停顿些许后答道:苟简诛茅胜野盘，吒身城郭爱平安。他摘下了黑框眼镜：年轻人，你不按基本法出牌啊… 各位新年快乐！！！",
      QZoneDate: new Date(2017,1,4,13,59,0),
      Weibo: "他还没有发过微博",
      WeiboDate: null,
      Facebook: "shopping for mama @ 美国 · 加利福尼亚州 · 蒙特利公园",
      FacebookDate: new Date(2015,8,2,10,27,0)
    },
    {
      id: 102,
      name: "Valorad",
      QZone: "#上古卷轴5# #天际特别版# 之前一直忍着不打mod就是因为用mod会禁用成就的B社破逻辑，一直在等待skse64出来，以为只有skse出来了才会有成就启用插件。现在skse64好不容易真出来了，但是搜了一圈N网发现一款居然不用skse都行的启用插件！太后悔了等那么久！Achievements Mods Enabler ",
      QZoneDate: new Date(2017,1,13,14,55,0),
      Weibo: "昆特牌3 一周目结束！~[挤眼] ​​​​",
      WeiboDate: new Date(2017,1,10,22,50,0),
      Facebook: `Looks like I'll be working on "MongoDB-based Storage and Retrieval System for RS Big Data", for my college graduation design.`,
      FacebookDate: new Date(2016,1,1,20,20,2)
    },
  ];

  ngOnInit() {
  }

}

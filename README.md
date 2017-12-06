# LearnAgTwoTwo

Helping wcxaaa learn Angular 2+.

[Angular-cli](https://github.com/angular/angular-cli) has been replaced by a dedicated webpack ([ngx-webpack-simple-starter-sass](https://github.com/longyiszh/ngx-webpack-simple-starter-sass)) since version 2.

## Install dependencies
``` bash
npm install
```
..or
``` bash
yarn install
```

## Server Firing up
``` bash
npm run xxx
```

and xxx being:

|   -   |  dev   |  compile  | start|
|:-----:|:------:|:-----:|:-----:|
|  front  |  `serve:c`[Webpack-dev-server]|  `build:c`[Webpack]  | N/A
|  back  |  N/A  |  `build:s`[Webpack]  | `start:s` [koa only]
|  together  |  N/A  |  `build`[Webpack] | `start` [koa]

## Unit Testing
To execute the unit tests via [Karma](https://karma-runner.github.io), run:
``` bash
npm run test
```

## Code scaffolding
Copy and paste the `dummy` module.

## Miscellaneous

### Mongo Mock Data
模拟Steve CDK数据已经丢到在src/client/assets/data里面了。请您用mongoimport导入，或`npm start`将后台启动后，往`/api/sdk/add`上面post。格式实例：
``` json
  {
    "name": "辐射：新奥尔良",
    "price": 188,
    "platform": "St EA m",
    "receiver": "everyone@高端黑讨论组",
    "steveAttitude": "gone_insane"
  }
```


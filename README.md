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

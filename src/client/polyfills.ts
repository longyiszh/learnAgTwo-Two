// This file includes polyfills needed by Angular and is loaded before the app.
// You can add your own extra polyfills to this file.
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html

// Needed for: IE9
// import 'classlist.js';

// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';

// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';

// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

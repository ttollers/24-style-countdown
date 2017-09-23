/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players__ = __webpack_require__(1);


const urlSections = window.location.href.split("/");
const playerStr = urlSections[urlSections.length -1];

const player = __WEBPACK_IMPORTED_MODULE_0__players__["a" /* default */][playerStr];
$('#js_headshot').attr('src', player.headshot);
$('#js_backoftheshirt').text(player.backOfTheShirt);
$('#js_name').text(player.name);
$('#js_rank').text(player.rank);
$('#js_seed').text(player.seed);

player.bio.forEach(para => {
  const html = '<div class="col-lg-auto"><p>' + para + '</p></div>';
  $('#js_bio').append(html);
});

player.strengths.forEach(strength => {
  const html = '<p>' + strength + '</p>';
  $('#js_strengths').append(html);
});

player.weaknesses.forEach(weakness => {
  const html = '<p>' + weakness + '</p>';
  $('#js_weaknesses').append(html);
});

$('#js_fifainspiration')
  .append('<h3>' + player.fifaInspiration.player + '</h3>')
  .append('<p>' + player.fifaInspiration.info + '</p>');

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__george__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bis__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  george: __WEBPACK_IMPORTED_MODULE_0__george__["a" /* default */],
  bis: __WEBPACK_IMPORTED_MODULE_1__bis__["a" /* default */]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const george = {
  name: 'George',
  rank: 'First Mate',
  headshot: 'img/profile.png',
  seed: 'TBC',
  bio: ['Co Founder and **, George is a living legend of the Dream Team'],
  strengths: [

    'Python',
    'Cricket',
  ],
  weaknesses: [
    '',
    'Compliments',
    'Arun Malik',
  ]
};

/* harmony default export */ __webpack_exports__["a"] = (george);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const bis = {
  name: 'Bis',
  backOfTheShirt: 'UR A CUNT',
  rank: 'Powder Monkey',
  headshot: 'img/bis_headshot.jpeg',
  seed: '8',
  bio: [
    'Bis is one of the hardest people to write a bio for. Not for any emotional reasons... Simply because there isn\'t much to say.',
    'Ever-present and enthusiastic, Bis has had many updates over the years and debates still rage on whether he his current version (2.0) has . Nevertheless, Bis has established himself as an important member of the who deserves, if not respect, at least some acknowledgement.'
  ],
  strengths: [
    'Tries really hard',
    'Adheres to Fifa rules well'
  ],
  weaknesses: [
    'Bowel Movements',
    'Finishing',
    'Female Friends',
    'Personality',
  ],
  fifaInspiration: {
    player: 'Gutierez',
    info: 'Never had the ability, and blighted by tragedy, Bis does the best with what he has. No one can ever understand what it\'s like for him. While we may not respect him, he earns our pity'
  }
};

/* harmony default export */ __webpack_exports__["a"] = (bis);

/***/ })
/******/ ]);
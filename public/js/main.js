/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hystmodal.min.js":
/*!*********************************!*\
  !*** ./src/js/hystmodal.min.js ***!
  \*********************************/
/***/ (function() {

eval("!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=1)}([function(e,t,n){\"use strict\";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,\"a\",(function(){return l}));var s,r,a,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e);this.config=i({backscroll:!0,linkAttributeName:\"data-hystmodal\",closeOnOverlay:!0,closeOnEsc:!0,closeOnButton:!0,waitTransitions:!1,catchFocus:!0,fixedSelectors:\"*[data-hystfixed]\",beforeOpen:function(){},afterClose:function(){}},t),this.config.linkAttributeName&&this.init(),this._closeAfterTransition=this._closeAfterTransition.bind(this)}var t,n,s;return t=e,(n=[{key:\"init\",value:function(){this.isOpened=!1,this.openedWindow=!1,this.starter=!1,this._nextWindows=!1,this._scrollPosition=0,this._reopenTrigger=!1,this._overlayChecker=!1,this._isMoved=!1,this._focusElements=[\"a[href]\",\"area[href]\",'input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden])',\"select:not([disabled]):not([aria-hidden])\",\"textarea:not([disabled]):not([aria-hidden])\",\"button:not([disabled]):not([aria-hidden])\",\"iframe\",\"object\",\"embed\",\"[contenteditable]\",'[tabindex]:not([tabindex^=\"-\"])'],this._modalBlock=!1,e._shadow||(e._shadow=document.createElement(\"button\"),e._shadow.classList.add(\"hystmodal__shadow\"),document.body.appendChild(e._shadow)),this.eventsFeeler()}},{key:\"eventsFeeler\",value:function(){document.addEventListener(\"click\",function(e){var t=e.target.closest(\"[\"+this.config.linkAttributeName+\"]\");if(!this._isMoved&&t){e.preventDefault(),this.starter=t;var n=this.starter.getAttribute(this.config.linkAttributeName);return this._nextWindows=document.querySelector(n),void this.open()}this.config.closeOnButton&&e.target.closest(\"[data-hystclose]\")&&this.close()}.bind(this)),this.config.closeOnOverlay&&(document.addEventListener(\"mousedown\",function(e){!this._isMoved&&e.target instanceof Element&&!e.target.classList.contains(\"hystmodal__wrap\")||(this._overlayChecker=!0)}.bind(this)),document.addEventListener(\"mouseup\",function(e){if(!this._isMoved&&e.target instanceof Element&&this._overlayChecker&&e.target.classList.contains(\"hystmodal__wrap\"))return e.preventDefault(),this._overlayChecker,void this.close();this._overlayChecker=!1}.bind(this))),window.addEventListener(\"keydown\",function(e){if(!this._isMoved&&this.config.closeOnEsc&&27==e.which&&this.isOpened)return e.preventDefault(),void this.close();!this._isMoved&&this.config.catchFocus&&9==e.which&&this.isOpened&&this.focusCatcher(e)}.bind(this))}},{key:\"open\",value:function(t){if(t&&(this._nextWindows=\"string\"==typeof t?document.querySelector(t):t),this._nextWindows){if(this.isOpened)return this._reopenTrigger=!0,void this.close();this.openedWindow=this._nextWindows,this._modalBlock=this.openedWindow.querySelector(\".hystmodal__window\"),this.config.beforeOpen(this),this._bodyScrollControl(),e._shadow.classList.add(\"hystmodal__shadow--show\"),this.openedWindow.classList.add(\"hystmodal--active\"),this.openedWindow.setAttribute(\"aria-hidden\",\"false\"),this.config.catchFocus&&this.focusContol(),this.isOpened=!0}else console.log(\"Warinig: hustModal selector is not found\")}},{key:\"close\",value:function(){this.isOpened&&(this.config.waitTransitions?(this.openedWindow.classList.add(\"hystmodal--moved\"),this._isMoved=!0,this.openedWindow.addEventListener(\"transitionend\",this._closeAfterTransition),this.openedWindow.classList.remove(\"hystmodal--active\")):(this.openedWindow.classList.remove(\"hystmodal--active\"),this._closeAfterTransition()))}},{key:\"_closeAfterTransition\",value:function(){this.openedWindow.classList.remove(\"hystmodal--moved\"),this.openedWindow.removeEventListener(\"transitionend\",this._closeAfterTransition),this._isMoved=!1,e._shadow.classList.remove(\"hystmodal__shadow--show\"),this.openedWindow.setAttribute(\"aria-hidden\",\"true\"),this.config.catchFocus&&this.focusContol(),this._bodyScrollControl(),this.isOpened=!1,this.openedWindow.scrollTop=0,this.config.afterClose(this),this._reopenTrigger&&(this._reopenTrigger=!1,this.open())}},{key:\"focusContol\",value:function(){var e=this.openedWindow.querySelectorAll(this._focusElements);this.isOpened&&this.starter?this.starter.focus():e.length&&e[0].focus()}},{key:\"focusCatcher\",value:function(e){var t=this.openedWindow.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(t);if(this.openedWindow.contains(document.activeElement)){var i=n.indexOf(document.activeElement);console.log(i),e.shiftKey&&0===i&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}else n[0].focus(),e.preventDefault()}},{key:\"_bodyScrollControl\",value:function(){if(this.config.backscroll){var e=Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors)),t=document.documentElement;if(!0===this.isOpened)return t.classList.remove(\"hystmodal__opened\"),t.style.marginRight=\"\",e.map((function(e){e.style.marginRight=\"\"})),window.scrollTo(0,this._scrollPosition),void(t.style.top=\"\");this._scrollPosition=window.pageYOffset;var n=window.innerWidth-t.clientWidth;t.style.top=-this._scrollPosition+\"px\",n&&(t.style.marginRight=n+\"px\",e.map((function(e){e.style.marginRight=parseInt(getComputedStyle(e).marginRight)+n+\"px\"}))),t.classList.add(\"hystmodal__opened\")}}}])&&o(t.prototype,n),s&&o(t,s),e}();a=!1,(r=\"_shadow\")in(s=l)?Object.defineProperty(s,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[r]=a},function(e,t,n){\"use strict\";n.r(t),function(e){var t=n(0);n(3),n(4);e.HystModal=t.a}.call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function(\"return this\")()}catch(e){\"object\"==typeof window&&(n=window)}e.exports=n},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t,n){}]);\n\n//# sourceURL=webpack://gulp-settings/./src/js/hystmodal.min.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/partners-swiper.js */ \"./src/js/modules/partners-swiper.js\");\n/* harmony import */ var _modules_map_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/map-main.js */ \"./src/js/modules/map-main.js\");\n/* harmony import */ var _modules_vacancys_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/vacancys-swiper.js */ \"./src/js/modules/vacancys-swiper.js\");\n\r\n\r\n\r\n\r\n_modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__.parnersSwiperTop;\r\n_modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__.parnersSwiperLower;\r\n_modules_vacancys_swiper_js__WEBPACK_IMPORTED_MODULE_2__.vacancySwiper;\r\n\r\nlet swiper = new Swiper(\".mySwiper\", {\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n  },\r\n});\r\n\r\nlet swiper1 = new Swiper(\".mySwiper1\", {\r\n  pagination: {\r\n    el: \".swiper-pagination1\",\r\n    type: \"progressbar\",\r\n  },\r\n  spaceBetween: 20,\r\n  slidesPerView: \"auto\",\r\n  breakpoints: {\r\n    475: {\r\n      centeredSlides: true,\r\n    },\r\n    752: {\r\n      slidesPerView: \"auto\",\r\n    },\r\n    880: {\r\n      slidesPerView: 2.5,\r\n    },\r\n    960: {\r\n      slidesPerView: 3,\r\n    },\r\n    1024: {\r\n      slidesPerView: 3.5,\r\n    },\r\n    1150: {\r\n      slidesPerView: 4,\r\n    },\r\n    1320: {\r\n      slidesPerView: 4.5,\r\n    },\r\n    1440: {\r\n      slidesPerView: 4.5,\r\n    },\r\n  },\r\n});\r\n\r\nvar swiper2 = new Swiper(\".mySwiper2\", {\r\n  effect: \"coverflow\",\r\n  grabCursor: true,\r\n  centeredSlides: true,\r\n  slidesPerView: \"3\",\r\n  coverflowEffect: {\r\n    rotate: 100,\r\n    stretch: -50,\r\n    depth: 100,\r\n    modifier: 0,\r\n  },\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  initialSlide: 1,\r\n});\r\n\r\nvar newsSwiper = new Swiper(\".news-swiper\", {\r\n  spaceBetween: 20,\r\n  slidesPerView: \"auto\",\r\n  enabled: true,\r\n  speed: 400,\r\n  breakpoints: {\r\n    950: {\r\n      enabled: false,\r\n    },\r\n  },\r\n});\r\n\r\nwindow.onload = function () {\r\n  if (document.querySelector(\".map \")) {\r\n    (0,_modules_map_main_js__WEBPACK_IMPORTED_MODULE_1__.ready)();\r\n  }\r\n};\r\n\r\nconst myModal = new HystModal({\r\n  catchFocus: true,\r\n  closeOnEsc: true,\r\n  backscroll: true,\r\n});\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/map-main.js":
/*!************************************!*\
  !*** ./src/js/modules/map-main.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ready\": function() { return /* binding */ ready; }\n/* harmony export */ });\n// map with dots\r\n\r\nvar isActive = 0;\r\nvar isLoading = 1;\r\nvar funcStatus = true;\r\nvar test = 1;\r\nconst count = document.querySelectorAll(\"[data-id]\");\r\n\r\n//удаляет модальное окно с инфой\r\nfunction removeClass() {\r\n  let infoCards = document.querySelectorAll(\"[data-info-id]\");\r\n  infoCards.forEach((el) => {\r\n    el.classList.remove(\"show\");\r\n  });\r\n}\r\n\r\n//удаляет внешний круг\r\nfunction removeCircle() {\r\n  count.forEach((el) => {\r\n    el.style.display = \"none\";\r\n  });\r\n}\r\n\r\n//добавляет внешний круг\r\nfunction addCircle(idx) {\r\n  let circle2 = document.querySelector(`[data-id='${idx}']`);\r\n  circle2.style.display = \"block\";\r\n}\r\n\r\nfunction ready() {\r\n  function setAround(percent, idx) {\r\n    removeCircle();\r\n    let beforeElemIdx;\r\n\r\n    beforeElemIdx = idx === 0 ? count.length - 1 : idx - 1;\r\n    let beforeElem = document.querySelector(\r\n      '[data-id=\"' + beforeElemIdx + '\"]'\r\n    );\r\n    let elem = document.querySelector('[data-id=\"' + idx + '\"]');\r\n    elem.style.display = \"block\";\r\n    beforeElem.style.display = \"block\";\r\n    const math = 2 * Math.PI * elem.r.baseVal.value;\r\n\r\n    elem.style.strokeDasharray = `${math} 1000`;\r\n\r\n    let a = math * (1 - percent / 100);\r\n    elem.style.strokeDashoffset = a;\r\n    percent = percent.toFixed(1);\r\n    if (percent >= 98.8) {\r\n      removeClass();\r\n      let infoShow = document.querySelector(`[data-info-id=\"${idx}\"]`);\r\n      infoShow.classList.add(\"show\");\r\n      isLoading++;\r\n      if (isLoading === count.length) {\r\n        isLoading = 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  requestAnimationFrame(draw);\r\n  function draw(t) {\r\n    if (funcStatus === true) {\r\n      let idx = isLoading;\r\n      requestAnimationFrame(draw);\r\n      setAround((t / 10) % 100, idx);\r\n    }\r\n  }\r\n}\r\n\r\n\r\nvar dots = document.querySelectorAll(\".dota\");\r\nvar infoCards = document.querySelectorAll(\"[data-info-id]\");\r\nvar closeBtn = document.querySelectorAll(\".close-hide\");\r\n\r\nlet circle = document.querySelectorAll(\"[data-id]\");\r\n\r\nlet i = 0;\r\n\r\ndots.forEach((el) => {\r\n  el.addEventListener(\"click\", (elem) => {\r\n    let idx = el.dataset.dota;\r\n    showInfo(idx);\r\n  });\r\n});\r\n\r\n//открывает модальное окно и ставит на паузу\r\nfunction showInfo(idx) {\r\n  // isLoading = 0;\r\n  removeClass();\r\n  removeCircle();\r\n  addCircle(idx);\r\n  funcStatus = false;\r\n  let elem = document.querySelector(`[data-info-id='${idx}']`);\r\n  elem.classList.add(\"show\");\r\n\r\n  //должно: при нажатии кружок заполняется на 100%\r\n  //сейчас: при нажатии кружок заполняется на 100%, после возобновлении функции откатывает кружок до заполнения на 100%\r\n  let elem2 = document.querySelector('[data-id=\"' + idx + '\"]');\r\n  elem2.style.strokeDasharray = 0;\r\n}\r\n\r\ncloseBtn.forEach((el) => {\r\n  el.addEventListener(\"click\", () => {\r\n    let idx = el.parentNode.dataset.infoId;\r\n    closeInfo(idx);\r\n  });\r\n});\r\n\r\n//закрывает модалку и далее запускает функцию\r\nfunction closeInfo(idx) {\r\n  removeClass();\r\n  ready(idx);\r\n  funcStatus = true;\r\n  // test = idx;\r\n  // beforeElemIdx = idx;\r\n  // нужно изменить beforeElemIdx на только что нажатый элемент\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/map-main.js?");

/***/ }),

/***/ "./src/js/modules/partners-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/modules/partners-swiper.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parnersSwiperLower\": function() { return /* binding */ parnersSwiperLower; },\n/* harmony export */   \"parnersSwiperTop\": function() { return /* binding */ parnersSwiperTop; }\n/* harmony export */ });\nvar parnersSwiperTop = new Swiper(\".partners--top\", {\r\n  spaceBetween: 20,\r\n  centeredSlides: true,\r\n  speed: 5000,\r\n  autoplay: {\r\n    delay: 1,\r\n    disableOnInteraction: false,\r\n  },\r\n  loop: true,\r\n  slidesPerView: 4,\r\n  allowTouchMove: true,\r\n  disableOnInteraction: true,\r\n});\r\n\r\nvar parnersSwiperLower = new Swiper(\".partners--lower\", {\r\n  spaceBetween: 20,\r\n  centeredSlides: true,\r\n  speed: 5000,\r\n  autoplay: {\r\n    delay: 1,\r\n    reverseDirection: true,\r\n    disableOnInteraction: false,\r\n  },\r\n  loop: true,\r\n  slidesPerView: 4,\r\n  allowTouchMove: true,\r\n  disableOnInteraction: true,\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/partners-swiper.js?");

/***/ }),

/***/ "./src/js/modules/sum.js":
/*!*******************************!*\
  !*** ./src/js/modules/sum.js ***!
  \*******************************/
/***/ (function(module) {

eval("module.exports = (a, b) => a + b;\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/sum.js?");

/***/ }),

/***/ "./src/js/modules/vacancys-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/modules/vacancys-swiper.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vacancySwiper\": function() { return /* binding */ vacancySwiper; }\n/* harmony export */ });\nvar vacancySwiper = new Swiper(\".q-vacancys-swiper\", {\r\n  spaceBetween: 20,\r\n  // centeredSlides: true,\r\n  slidesPerView: 2,\r\n  allowTouchMove: true,\r\n  // disableOnInteraction: true,\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/vacancys-swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/hystmodal.min.js");
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/modules/map-main.js");
/******/ 	__webpack_require__("./src/js/modules/partners-swiper.js");
/******/ 	__webpack_require__("./src/js/modules/sum.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/vacancys-swiper.js");
/******/ 	
/******/ })()
;
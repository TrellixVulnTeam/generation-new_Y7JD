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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/partners-swiper.js */ \"./src/js/modules/partners-swiper.js\");\n/* harmony import */ var _modules_map_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/map-main.js */ \"./src/js/modules/map-main.js\");\n/* harmony import */ var _modules_vacancys_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/vacancys-swiper.js */ \"./src/js/modules/vacancys-swiper.js\");\n\r\n\r\n\r\n\r\n_modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__.parnersSwiperTop\r\n_modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__.parnersSwiperLower\r\n_modules_vacancys_swiper_js__WEBPACK_IMPORTED_MODULE_2__.vacancySwiper\r\n\r\nlet swiper = new Swiper(\".mySwiper\", {\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n  },\r\n});\r\n\r\nlet swiper1 = new Swiper(\".mySwiper1\", {\r\n  pagination: {\r\n    el: \".swiper-pagination1\",\r\n    type: \"progressbar\",\r\n  },\r\n  spaceBetween: 20,\r\n  slidesPerView: \"auto\",\r\n  breakpoints: {\r\n    475: {\r\n      centeredSlides: true,\r\n    },\r\n    752: {\r\n      slidesPerView: \"auto\",\r\n    },\r\n    880: {\r\n      slidesPerView: 2.5,\r\n    },\r\n    960: {\r\n      slidesPerView: 3,\r\n    },\r\n    1024: {\r\n      slidesPerView: 3.5,\r\n    },\r\n    1150: {\r\n      slidesPerView: 4,\r\n    },\r\n    1320: {\r\n      slidesPerView: 4.5,\r\n    },\r\n    1440: {\r\n      slidesPerView: 4.5,\r\n    },\r\n  }\r\n});\r\n\r\nvar swiper2 = new Swiper(\".mySwiper2\", {\r\n  effect: \"coverflow\",\r\n  grabCursor: true,\r\n  centeredSlides: true,\r\n  slidesPerView: \"3\",\r\n  coverflowEffect: {\r\n    rotate: 100,\r\n    stretch: -50,\r\n    depth: 100,\r\n    modifier: 0,\r\n  },\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  initialSlide: 1,\r\n});\r\n\r\nvar newsSwiper = new Swiper(\".news-swiper\", {\r\n  spaceBetween: 20,\r\n  slidesPerView: \"auto\",\r\n  enabled: true,\r\n  speed: 400,\r\n  breakpoints: {\r\n    950: {\r\n      enabled: false,\r\n    }\r\n  }\r\n})\r\n\r\nwindow.onload = function() {\r\n  if(document.querySelector('.map ')) {\r\n    (0,_modules_map_main_js__WEBPACK_IMPORTED_MODULE_1__.ready)();\r\n  }\r\n}\n\n//# sourceURL=webpack://gulp-settings/./src/js/main.js?");

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
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/modules/map-main.js");
/******/ 	__webpack_require__("./src/js/modules/partners-swiper.js");
/******/ 	__webpack_require__("./src/js/modules/sum.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/vacancys-swiper.js");
/******/ 	
/******/ })()
;
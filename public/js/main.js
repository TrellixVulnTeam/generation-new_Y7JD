/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hystmodal.js":
/*!*****************************!*\
  !*** ./src/js/hystmodal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HystModal; }\n/* harmony export */ });\nclass HystModal {\r\n  constructor(props) {\r\n    let defaultConfig = {\r\n      backscroll: true,\r\n      linkAttributeName: \"data-hystmodal\",\r\n      closeOnOverlay: true,\r\n      closeOnEsc: true,\r\n      closeOnButton: true,\r\n      waitTransitions: false,\r\n      catchFocus: true,\r\n      fixedSelectors: \"*[data-hystfixed]\",\r\n      beforeOpen: () => {},\r\n      afterClose: () => {},\r\n    };\r\n    this.config = Object.assign(defaultConfig, props);\r\n    if (this.config.linkAttributeName) {\r\n      this.init();\r\n    }\r\n    this._closeAfterTransition = this._closeAfterTransition.bind(this);\r\n  }\r\n\r\n  static _shadow = false;\r\n\r\n  init() {\r\n    this.isOpened = false;\r\n    this.openedWindow = false;\r\n    (this.starter = false), (this._nextWindows = false);\r\n    this._scrollPosition = 0;\r\n    this._reopenTrigger = false;\r\n    (this._overlayChecker = false), (this._isMoved = false);\r\n    this._focusElements = [\r\n      \"a[href]\",\r\n      \"area[href]\",\r\n      'input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden])',\r\n      \"select:not([disabled]):not([aria-hidden])\",\r\n      \"textarea:not([disabled]):not([aria-hidden])\",\r\n      \"button:not([disabled]):not([aria-hidden])\",\r\n      \"iframe\",\r\n      \"object\",\r\n      \"embed\",\r\n      \"[contenteditable]\",\r\n      '[tabindex]:not([tabindex^=\"-\"])',\r\n    ];\r\n    this._modalBlock = false;\r\n\r\n    if (!HystModal._shadow) {\r\n      HystModal._shadow = document.createElement(\"button\");\r\n      HystModal._shadow.classList.add(\"hystmodal__shadow\");\r\n      document.body.appendChild(HystModal._shadow);\r\n    }\r\n    this.eventsFeeler();\r\n  }\r\n\r\n  eventsFeeler() {\r\n    document.addEventListener(\r\n      \"click\",\r\n      function (e) {\r\n        const clickedlink = e.target.closest(\r\n          \"[\" + this.config.linkAttributeName + \"]\"\r\n        );\r\n        if (!this._isMoved && clickedlink) {\r\n          e.preventDefault();\r\n          this.starter = clickedlink;\r\n          let targetSelector = this.starter.getAttribute(\r\n            this.config.linkAttributeName\r\n          );\r\n          this._nextWindows = document.querySelector(targetSelector);\r\n          this.open();\r\n          return;\r\n        }\r\n        if (this.config.closeOnButton && e.target.closest(\"[data-hystclose]\")) {\r\n          this.close();\r\n          return;\r\n        }\r\n      }.bind(this)\r\n    );\r\n\r\n    if (this.config.closeOnOverlay) {\r\n      document.addEventListener(\r\n        \"mousedown\",\r\n        function (e) {\r\n          if (\r\n            !this._isMoved &&\r\n            e.target instanceof Element &&\r\n            !e.target.classList.contains(\"hystmodal__wrap\")\r\n          )\r\n            return;\r\n          this._overlayChecker = true;\r\n        }.bind(this)\r\n      );\r\n\r\n      document.addEventListener(\r\n        \"mouseup\",\r\n        function (e) {\r\n          if (\r\n            !this._isMoved &&\r\n            e.target instanceof Element &&\r\n            this._overlayChecker &&\r\n            e.target.classList.contains(\"hystmodal__wrap\")\r\n          ) {\r\n            e.preventDefault();\r\n            !this._overlayChecker;\r\n            this.close();\r\n            return;\r\n          }\r\n          this._overlayChecker = false;\r\n        }.bind(this)\r\n      );\r\n    }\r\n\r\n    window.addEventListener(\r\n      \"keydown\",\r\n      function (e) {\r\n        if (\r\n          !this._isMoved &&\r\n          this.config.closeOnEsc &&\r\n          e.which == 27 &&\r\n          this.isOpened\r\n        ) {\r\n          e.preventDefault();\r\n          this.close();\r\n          return;\r\n        }\r\n        if (\r\n          !this._isMoved &&\r\n          this.config.catchFocus &&\r\n          e.which == 9 &&\r\n          this.isOpened\r\n        ) {\r\n          this.focusCatcher(e);\r\n          return;\r\n        }\r\n      }.bind(this)\r\n    );\r\n  }\r\n\r\n  open(selector) {\r\n    if (selector) {\r\n      if (typeof selector === \"string\") {\r\n        this._nextWindows = document.querySelector(selector);\r\n      } else {\r\n        this._nextWindows = selector;\r\n      }\r\n    }\r\n    if (!this._nextWindows) {\r\n      console.log(\"Warinig: hustModal selector is not found\");\r\n      return;\r\n    }\r\n    if (this.isOpened) {\r\n      this._reopenTrigger = true;\r\n      this.close();\r\n      return;\r\n    }\r\n    this.openedWindow = this._nextWindows;\r\n    this._modalBlock = this.openedWindow.querySelector(\".hystmodal__window\");\r\n    this.config.beforeOpen(this);\r\n    this._bodyScrollControl();\r\n    HystModal._shadow.classList.add(\"hystmodal__shadow--show\");\r\n    this.openedWindow.classList.add(\"hystmodal--active\");\r\n    this.openedWindow.setAttribute(\"aria-hidden\", \"false\");\r\n    if (this.config.catchFocus) this.focusContol();\r\n    this.isOpened = true;\r\n  }\r\n\r\n  close() {\r\n    if (!this.isOpened) {\r\n      return;\r\n    }\r\n    if (this.config.waitTransitions) {\r\n      this.openedWindow.classList.add(\"hystmodal--moved\");\r\n      this._isMoved = true;\r\n      this.openedWindow.addEventListener(\r\n        \"transitionend\",\r\n        this._closeAfterTransition\r\n      );\r\n      this.openedWindow.classList.remove(\"hystmodal--active\");\r\n    } else {\r\n      this.openedWindow.classList.remove(\"hystmodal--active\");\r\n      this._closeAfterTransition();\r\n    }\r\n  }\r\n\r\n  _closeAfterTransition() {\r\n    this.openedWindow.classList.remove(\"hystmodal--moved\");\r\n    this.openedWindow.removeEventListener(\r\n      \"transitionend\",\r\n      this._closeAfterTransition\r\n    );\r\n    this._isMoved = false;\r\n    HystModal._shadow.classList.remove(\"hystmodal__shadow--show\");\r\n    this.openedWindow.setAttribute(\"aria-hidden\", \"true\");\r\n\r\n    if (this.config.catchFocus) this.focusContol();\r\n    this._bodyScrollControl();\r\n    this.isOpened = false;\r\n    this.openedWindow.scrollTop = 0;\r\n    this.config.afterClose(this);\r\n\r\n    if (this._reopenTrigger) {\r\n      this._reopenTrigger = false;\r\n      this.open();\r\n    }\r\n  }\r\n\r\n  focusContol() {\r\n    const nodes = this.openedWindow.querySelectorAll(this._focusElements);\r\n    if (this.isOpened && this.starter) {\r\n      this.starter.focus();\r\n    } else {\r\n      if (nodes.length) nodes[0].focus();\r\n    }\r\n  }\r\n\r\n  focusCatcher(e) {\r\n    const nodes = this.openedWindow.querySelectorAll(this._focusElements);\r\n    const nodesArray = Array.prototype.slice.call(nodes);\r\n    if (!this.openedWindow.contains(document.activeElement)) {\r\n      nodesArray[0].focus();\r\n      e.preventDefault();\r\n    } else {\r\n      const focusedItemIndex = nodesArray.indexOf(document.activeElement);\r\n      console.log(focusedItemIndex);\r\n      if (e.shiftKey && focusedItemIndex === 0) {\r\n        nodesArray[nodesArray.length - 1].focus();\r\n        e.preventDefault();\r\n      }\r\n      if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {\r\n        nodesArray[0].focus();\r\n        e.preventDefault();\r\n      }\r\n    }\r\n  }\r\n\r\n  _bodyScrollControl() {\r\n    if (!this.config.backscroll) return;\r\n\r\n    // collect fixel selectors to array\r\n    let fixedSelectors = Array.prototype.slice.call(\r\n      document.querySelectorAll(this.config.fixedSelectors)\r\n    );\r\n\r\n    let html = document.documentElement;\r\n    if (this.isOpened === true) {\r\n      html.classList.remove(\"hystmodal__opened\");\r\n      html.style.marginRight = \"\";\r\n      fixedSelectors.map((el) => {\r\n        el.style.marginRight = \"\";\r\n      });\r\n      window.scrollTo(0, this._scrollPosition);\r\n      html.style.top = \"\";\r\n      return;\r\n    }\r\n    this._scrollPosition = window.pageYOffset;\r\n    let marginSize = window.innerWidth - html.clientWidth;\r\n    html.style.top = -this._scrollPosition + \"px\";\r\n\r\n    if (marginSize) {\r\n      html.style.marginRight = marginSize + \"px\";\r\n      fixedSelectors.map((el) => {\r\n        el.style.marginRight =\r\n          parseInt(getComputedStyle(el).marginRight) + marginSize + \"px\";\r\n      });\r\n    }\r\n    html.classList.add(\"hystmodal__opened\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/hystmodal.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/partners-swiper.js */ \"./src/js/modules/partners-swiper.js\");\n/* harmony import */ var _modules_map_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/map-main.js */ \"./src/js/modules/map-main.js\");\n/* harmony import */ var _modules_vacancys_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/vacancys-swiper.js */ \"./src/js/modules/vacancys-swiper.js\");\n/* harmony import */ var _modules_phone_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/phone-number.js */ \"./src/js/modules/phone-number.js\");\n/* harmony import */ var _modules_project_swiper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/project-swiper.js */ \"./src/js/modules/project-swiper.js\");\n/* harmony import */ var _modules_scroll_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll-header.js */ \"./src/js/modules/scroll-header.js\");\n/* harmony import */ var _modules_arc_service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/arc-service.js */ \"./src/js/modules/arc-service.js\");\n/* harmony import */ var _hystmodal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hystmodal */ \"./src/js/hystmodal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__.parnersSwiperTop;\r\n_modules_partners_swiper_js__WEBPACK_IMPORTED_MODULE_0__.parnersSwiperLower;\r\n_modules_vacancys_swiper_js__WEBPACK_IMPORTED_MODULE_2__.vacancySwiper;\r\n_modules_project_swiper_js__WEBPACK_IMPORTED_MODULE_4__.projectCardSwiper;\r\n_modules_arc_service_js__WEBPACK_IMPORTED_MODULE_6__.arcTabSwiper;\r\n\r\n// SWIPERS\r\nlet swiper = new Swiper(\".mySwiper\", {\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n  },\r\n});\r\nlet arcticSwiper = new Swiper(\".arctic-swiper\", {\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n  },\r\n});\r\n\r\nlet swiper1 = new Swiper(\".mySwiper1\", {\r\n  pagination: {\r\n    el: \".swiper-pagination1\",\r\n    type: \"progressbar\",\r\n  },\r\n  spaceBetween: 20,\r\n  slidesPerView: \"auto\",\r\n  breakpoints: {\r\n    475: {\r\n      centeredSlides: true,\r\n    },\r\n    752: {\r\n      slidesPerView: \"auto\",\r\n    },\r\n    880: {\r\n      slidesPerView: 2.5,\r\n    },\r\n    960: {\r\n      slidesPerView: 3,\r\n    },\r\n    1024: {\r\n      slidesPerView: 3.5,\r\n    },\r\n    1150: {\r\n      slidesPerView: 4,\r\n    },\r\n    1320: {\r\n      slidesPerView: 4.5,\r\n    },\r\n    1440: {\r\n      slidesPerView: 4.5,\r\n    },\r\n  },\r\n});\r\n\r\nvar swiper2 = new Swiper(\".mySwiper2\", {\r\n  effect: \"coverflow\",\r\n  grabCursor: true,\r\n  centeredSlides: true,\r\n  slidesPerView: 3,\r\n  coverflowEffect: {\r\n    rotate: 100,\r\n    stretch: -55,\r\n    depth: 100,\r\n    modifier: 0,\r\n  },\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  initialSlide: 1,\r\n});\r\n\r\nvar newsSwiper = new Swiper(\".news-swiper\", {\r\n  spaceBetween: 20,\r\n  slidesPerView: \"auto\",\r\n  enabled: true,\r\n  speed: 400,\r\n  breakpoints: {\r\n    950: {\r\n      enabled: false,\r\n    },\r\n  },\r\n});\r\n\r\nwindow.onload = function () {\r\n  if (document.querySelector(\".map\")) {\r\n    (0,_modules_map_main_js__WEBPACK_IMPORTED_MODULE_1__.ready)();\r\n  }\r\n};\r\nwindow.onload = function () {\r\n  if (document.querySelector(\".q-form-phone\")) {\r\n    (0,_modules_phone_number_js__WEBPACK_IMPORTED_MODULE_3__.phoneValidate)();\r\n  }\r\n};\r\n\r\nconst myModal = new _hystmodal__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\r\n  linkAttributeName: \"data-hystmodal\",\r\n  catchFocus: true,\r\n  closeOnEsc: true,\r\n  backscroll: true,\r\n});\r\n\r\n\r\n__webpack_require__.g.HystModal = _hystmodal__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\r\n\r\n// press center tabs\r\nconst tabs = document.querySelector(\".q-news-body\");\r\nconst tabBtn = document.querySelectorAll(\".tab-btn\");\r\nconst tabContent = document.querySelectorAll(\".tab-content\");\r\n\r\ntabBtn.forEach((el) => {\r\n  el.addEventListener(\"click\", openTabs);\r\n});\r\nfunction openTabs(el) {\r\n  var btnTarget = el.currentTarget;\r\n  var tab = btnTarget.dataset.tab;\r\n  tabContent.forEach(function (el) {\r\n    el.classList.remove(\"tab-content-active\");\r\n  });\r\n  tabBtn.forEach(function (el) {\r\n    el.classList.remove(\"active-tab-btn\");\r\n  });\r\n  document.querySelector(\"#\" + tab).classList.add(\"tab-content-active\");\r\n  btnTarget.classList.add(\"active-tab-btn\");\r\n}\r\n// arctic services tabs\r\nconst tabsArctic = document.querySelector(\".q-arc-service__body\");\r\nconst tabArcContent = document.querySelectorAll(\".q-service-body\");\r\n\r\nconst tabArcBtn = document.querySelectorAll(\".arc-tab-btn\")\r\ntabArcBtn.forEach((e) => {\r\n  e.addEventListener(\"click\", openTabsArc);\r\n});\r\n\r\nfunction openTabsArc(el) {\r\n  let btnTarget = el.currentTarget;\r\n  let tab = btnTarget.dataset.tabArc;\r\n  tabArcContent.forEach((el) => {\r\n    el.classList.remove(\"tab-content-active\");\r\n  });\r\n  tabArcBtn.forEach((e) => {\r\n    \r\n    e.classList.remove(\"active-arc-tab-btn\");\r\n  });\r\n  document.querySelector(\"#\" + tab).classList.add(\"tab-content-active\");\r\n  btnTarget.classList.add(\"active-arc-tab-btn\");\r\n}\r\n\r\n// scroll header\r\n(0,_modules_scroll_header_js__WEBPACK_IMPORTED_MODULE_5__.scrollHeader)();\r\n\r\n// header burger\r\nconst burgerBtn = document.querySelector(\".navTrigger\");\r\nconst topHeader = document.querySelector(\".header-top\");\r\nconst navBg = document.querySelector(\".header-content\");\r\nconst nav = document.querySelector(\".nav-items\");\r\nconst navItem = document.querySelectorAll(\".nav-item\");\r\nconst hr = document.querySelector(\".hr\");\r\nconst navWrapper = document.querySelector(\".nav-items__wrapper\");\r\nconst header = document.querySelector(\".header\");\r\n\r\nlet pageY = window.innerHeight - window.innerHeight + 1;\r\n\r\nburgerBtn.addEventListener(\"click\", function () {\r\n  header.classList.toggle(\"active-white-header\");\r\n  topHeader.classList.toggle(\"active-bg\");\r\n  nav.classList.toggle(\"vertical\");\r\n  burgerBtn.classList.toggle(\"active-burger\");\r\n\r\n  if (burgerBtn.classList.contains(\"active-burger\")) {\r\n    hr.style.display = \"none\";\r\n    document.body.style.overflow = \"hidden\";\r\n    if (window.scrollY >= 50) {\r\n      header.classList.remove(\"scrolled-header\");\r\n    }\r\n  } else {\r\n    hr.style.display = \"block\";\r\n    document.body.style.overflow = \"unset\";\r\n    setTimeout(() => {\r\n      window.scrollBy(0, pageY);\r\n    }, 10);\r\n  }\r\n  if (nav.classList.length >= 4) {\r\n    nav.style.position = \"relative\";\r\n    navWrapper.style.top = \"0\";\r\n    navItem.forEach((el) => {\r\n      el.style.position = \"unset\";\r\n    });\r\n  } else {\r\n    nav.style.position = \"unset\";\r\n    navWrapper.style.top = \"-800px\";\r\n    navItem.forEach((el) => {\r\n      el.style.position = \"relative\";\r\n    });\r\n  }\r\n});\r\n\r\nconst mobBurger = document.querySelector(\".navTrigger2\");\r\nconst mobWrapper = document.querySelector(\".nav-mob__wrapper\");\r\nconst navSearch = document.querySelector(\".icon-search\");\r\n\r\nmobBurger.addEventListener(\"click\", function () {\r\n  mobBurger.classList.toggle(\"active-burger\");\r\n  mobWrapper.classList.toggle(\"active-mob__wrapper\");\r\n  if (mobWrapper.classList.contains(\"active-mob__wrapper\")) {\r\n    mobBurger.classList.add(\"stroke-white\");\r\n    navSearch.classList.add(\"search-scrolled\");\r\n    document.body.style.overflow = \"hidden\";\r\n  } else {\r\n    mobBurger.classList.remove(\"stroke-white\");\r\n    navSearch.classList.remove(\"search-scrolled\");\r\n    document.body.style.overflow = \"unset\";\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/arc-service.js":
/*!***************************************!*\
  !*** ./src/js/modules/arc-service.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arcTabSwiper\": function() { return /* binding */ arcTabSwiper; }\n/* harmony export */ });\nlet arcTabSwiper = new Swiper(\".q-arc-tab-swiper\", {\r\n  spaceBetween: 10,\r\n  freemode: true,\r\n  slidesPerView: 'auto',\r\n  allowTouchMove: true,\r\n  enabled: true,\r\n  grabCursor: true,\r\n  simulateTouch: true,\r\n  breakpoints: {\r\n    1260: {\r\n      enabled: false,\r\n    },\r\n  },\r\n});\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/arc-service.js?");

/***/ }),

/***/ "./src/js/modules/map-main.js":
/*!************************************!*\
  !*** ./src/js/modules/map-main.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ready\": function() { return /* binding */ ready; }\n/* harmony export */ });\n// map with dots\r\n\r\nvar isActive = 0;\r\nvar isLoading = 1;\r\nvar funcStatus = true;\r\nvar test = 1;\r\nconst count = document.querySelectorAll(\"[data-id]\");\r\n\r\n//удаляет модальное окно с инфой\r\nfunction removeClass() {\r\n  let infoCards = document.querySelectorAll(\"[data-info-id]\");\r\n  infoCards.forEach((el) => {\r\n    el.classList.remove(\"show\");\r\n  });\r\n}\r\n\r\n//удаляет внешний круг\r\nfunction removeCircle() {\r\n  count.forEach((el) => {\r\n    el.style.display = \"none\";\r\n  });\r\n}\r\n\r\n//добавляет внешний круг\r\nfunction addCircle(idx) {\r\n  let circle2 = document.querySelector(`[data-id='${idx}']`);\r\n  circle2.style.display = \"block\";\r\n}\r\n\r\nfunction ready() {\r\n  function setAround(percent, idx) {\r\n    removeCircle();\r\n    let beforeElemIdx;\r\n\r\n    beforeElemIdx = idx === 0 ? count.length - 1 : idx - 1;\r\n    let beforeElem = document.querySelector(\r\n      '[data-id=\"' + beforeElemIdx + '\"]'\r\n    );\r\n    let elem = document.querySelector('[data-id=\"' + idx + '\"]');\r\n    elem.style.display = \"block\";\r\n    beforeElem.style.display = \"block\";\r\n    const math = 2 * Math.PI * elem.r.baseVal.value;\r\n\r\n    elem.style.strokeDasharray = `${math} 1000`;\r\n\r\n    let a = math * (1 - percent / 100);\r\n    elem.style.strokeDashoffset = a;\r\n    percent = percent.toFixed(1);\r\n    if (percent >= 98.8) {\r\n      removeClass();\r\n      let infoShow = document.querySelector(`[data-info-id=\"${idx}\"]`);\r\n      infoShow.classList.add(\"show\");\r\n      isLoading++;\r\n      if (isLoading === count.length) {\r\n        isLoading = 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  requestAnimationFrame(draw);\r\n  function draw(t) {\r\n    if (funcStatus === true) {\r\n      let idx = isLoading;\r\n      requestAnimationFrame(draw);\r\n      setAround((t / 10) % 100, idx);\r\n    }\r\n  }\r\n}\r\n\r\n\r\nvar dots = document.querySelectorAll(\".dota\");\r\nvar infoCards = document.querySelectorAll(\"[data-info-id]\");\r\nvar closeBtn = document.querySelectorAll(\".close-hide\");\r\n\r\nlet circle = document.querySelectorAll(\"[data-id]\");\r\n\r\nlet i = 0;\r\n\r\ndots.forEach((el) => {\r\n  el.addEventListener(\"click\", (elem) => {\r\n    let idx = el.dataset.dota;\r\n    showInfo(idx);\r\n  });\r\n});\r\n\r\n//открывает модальное окно и ставит на паузу\r\nfunction showInfo(idx) {\r\n  // isLoading = 0;\r\n  removeClass();\r\n  removeCircle();\r\n  addCircle(idx);\r\n  funcStatus = false;\r\n  let elem = document.querySelector(`[data-info-id='${idx}']`);\r\n  elem.classList.add(\"show\");\r\n\r\n  //должно: при нажатии кружок заполняется на 100%\r\n  //сейчас: при нажатии кружок заполняется на 100%, после возобновлении функции откатывает кружок до заполнения на 100%\r\n  let elem2 = document.querySelector('[data-id=\"' + idx + '\"]');\r\n  elem2.style.strokeDasharray = 0;\r\n}\r\n\r\ncloseBtn.forEach((el) => {\r\n  el.addEventListener(\"click\", () => {\r\n    let idx = el.parentNode.dataset.infoId;\r\n    closeInfo(idx);\r\n  });\r\n});\r\n\r\n//закрывает модалку и далее запускает функцию\r\nfunction closeInfo(idx) {\r\n  removeClass();\r\n  ready(idx);\r\n  funcStatus = true;\r\n  // test = idx;\r\n  // beforeElemIdx = idx;\r\n  // нужно изменить beforeElemIdx на только что нажатый элемент\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/map-main.js?");

/***/ }),

/***/ "./src/js/modules/partners-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/modules/partners-swiper.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parnersSwiperLower\": function() { return /* binding */ parnersSwiperLower; },\n/* harmony export */   \"parnersSwiperTop\": function() { return /* binding */ parnersSwiperTop; }\n/* harmony export */ });\nvar parnersSwiperTop = new Swiper(\".partners--top\", {\r\n  spaceBetween: 20,\r\n  centeredSlides: true,\r\n  speed: 5000,\r\n  autoplay: {\r\n    delay: 1,\r\n    disableOnInteraction: false,\r\n  },\r\n  loop: true,\r\n  slidesPerView: 4,\r\n  allowTouchMove: true,\r\n  disableOnInteraction: true,\r\n});\r\n\r\nvar parnersSwiperLower = new Swiper(\".partners--lower\", {\r\n  spaceBetween: 20,\r\n  centeredSlides: true,\r\n  speed: 5000,\r\n  autoplay: {\r\n    delay: 1,\r\n    reverseDirection: true,\r\n    disableOnInteraction: false,\r\n  },\r\n  loop: true,\r\n  slidesPerView: 4,\r\n  allowTouchMove: true,\r\n  disableOnInteraction: true,\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/partners-swiper.js?");

/***/ }),

/***/ "./src/js/modules/phone-number.js":
/*!****************************************!*\
  !*** ./src/js/modules/phone-number.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phoneValidate\": function() { return /* binding */ phoneValidate; }\n/* harmony export */ });\nfunction phoneValidate() {\r\n  const input = document.body.querySelector(\".q-form-phone\");\r\n\r\n  input.addEventListener(\"keypress\", (evt) => {\r\n    if (evt.keyCode < 47 || evt.keyCode > 57) {\r\n      evt.preventDefault();\r\n    }\r\n  });\r\n\r\n  input.addEventListener(\"focus\", () => {\r\n    if (input.value.length === 0) {\r\n      input.value = \"+7\";\r\n      input.selectionStart = input.value.length;\r\n    }\r\n  });\r\n\r\n  input.addEventListener(\"click\", (evt) => {\r\n    if (input.selectionStart < 2) {\r\n      input.selectionStart = input.value.length;\r\n    }\r\n    if (evt.key === \"Backspace\" && input.value.length <= 2) {\r\n      evt.preventDefault();\r\n    }\r\n  });\r\n\r\n  input.addEventListener(\"blur\", () => {\r\n    if (input.value === \"+7\") {\r\n      input.value = \"\";\r\n    }\r\n  });\r\n\r\n  input.addEventListener(\"keydown\", (evt) => {\r\n    if (evt.key === \"Backspace\" && input.value.length <= 2) {\r\n      evt.preventDefault();\r\n    }\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/phone-number.js?");

/***/ }),

/***/ "./src/js/modules/project-swiper.js":
/*!******************************************!*\
  !*** ./src/js/modules/project-swiper.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectCardSwiper\": function() { return /* binding */ projectCardSwiper; }\n/* harmony export */ });\nlet projectCardSwiper = new Swiper(\".q-invest-card__swiper\", {\r\n  spaceBetween: 20,\r\n  // centeredSlides: true,\r\n  slidesPerView: 'auto',\r\n  allowTouchMove: true,\r\n  // disableOnInteraction: true,\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/project-swiper.js?");

/***/ }),

/***/ "./src/js/modules/scroll-header.js":
/*!*****************************************!*\
  !*** ./src/js/modules/scroll-header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollHeader\": function() { return /* binding */ scrollHeader; }\n/* harmony export */ });\nconst header = document.querySelector(\".header\");\r\nconst hideHeader = document.querySelector(\".header-content\");\r\nconst btnBurger = document.querySelector(\".navTrigger\");\r\n\r\nfunction scrollHeader() {\r\n  if(window.innerWidth > 768) {\r\n\r\n    const scrollHeader = window.addEventListener(\"scroll\", function () {\r\n      if (this.window.scrollY >= 50) {\r\n        header.classList.add(\"scrolled-header\");\r\n        if (header.classList.contains(\"scrolled-header\")) {\r\n          // this.document.querySelector(\".logo\").src = \"./img/LogoScroll.png\";\r\n          if(this.location.pathname == '/') {\r\n            this.document.querySelector(\".logo\").src = \"./img/LogoScroll.png\";\r\n          }\r\n          if(this.location.pathname == '/index.html') {\r\n            this.document.querySelector(\".logo\").src = \"./img/LogoScroll.png\";\r\n          }\r\n        }\r\n      } else {\r\n        header.classList.remove(\"scrolled-header\");\r\n        if (!header.classList.contains(\"scrolled-header\")) {\r\n          if(this.location.pathname == '/index.html') {\r\n            this.document.querySelector(\".logo\").src = \"./img/Logo.svg\";\r\n          }\r\n          if(this.location.pathname == '/') {\r\n            this.document.querySelector(\".logo\").src = \"./img/Logo.svg\";\r\n          }\r\n          // this.document.querySelector(\".logo\").src = \"./img/Logo.svg\";\r\n        }\r\n      }\r\n    });\r\n    // return scrollHeader\r\n  } else {\r\n\r\n    const scrollHeader = window.addEventListener(\"scroll\", function () {\r\n      if (this.window.scrollY >= 50) {\r\n        header.classList.add(\"scrolled-mob-header\");\r\n        if (header.classList.contains(\"scrolled-mob-header\")) {\r\n          if(this.location.pathname == '/') {\r\n            this.document.querySelector(\".logo\").src = \"./img/LogoScroll.png\";\r\n          }\r\n          if(this.location.pathname == '/index.html') {\r\n            this.document.querySelector(\".logo\").src = \"./img/LogoScroll.png\";\r\n          }\r\n        }\r\n      } else {\r\n        header.classList.remove(\"scrolled-mob-header\");\r\n        if (!header.classList.contains(\"scrolled-mob-header\")) {\r\n          if(this.location.pathname == '/index.html') {\r\n            this.document.querySelector(\".logo\").src = \"./img/Logo.svg\";\r\n          }\r\n          if(this.location.pathname == '/') {\r\n            this.document.querySelector(\".logo\").src = \"./img/Logo.svg\";\r\n          }\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/scroll-header.js?");

/***/ }),

/***/ "./src/js/modules/vacancys-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/modules/vacancys-swiper.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vacancySwiper\": function() { return /* binding */ vacancySwiper; }\n/* harmony export */ });\nvar vacancySwiper = new Swiper(\".q-vacancys-swiper\", {\r\n  spaceBetween: 20,\r\n  // centeredSlides: true,\r\n  slidesPerView: 'auto',\r\n  allowTouchMove: true,\r\n  // disableOnInteraction: true,\r\n  breakpoints: {\r\n    // 960: {\r\n    //   slidesPerView: 'auto',\r\n    // },\r\n  },\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/modules/vacancys-swiper.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/hystmodal.js");
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/modules/arc-service.js");
/******/ 	__webpack_require__("./src/js/modules/map-main.js");
/******/ 	__webpack_require__("./src/js/modules/partners-swiper.js");
/******/ 	__webpack_require__("./src/js/modules/phone-number.js");
/******/ 	__webpack_require__("./src/js/modules/project-swiper.js");
/******/ 	__webpack_require__("./src/js/modules/scroll-header.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/vacancys-swiper.js");
/******/ 	
/******/ })()
;
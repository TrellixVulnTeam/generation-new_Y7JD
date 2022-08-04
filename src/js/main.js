import {
  parnersSwiperTop,
  parnersSwiperLower,
} from "./modules/partners-swiper.js";
import { ready } from "./modules/map-main.js";
import { vacancySwiper } from "./modules/vacancys-swiper.js";
import { phoneValidate } from "./modules/phone-number.js";
import { projectCardSwiper } from "./modules/project-swiper.js";
import { scrollHeader } from "./modules/scroll-header.js";
import { arcTabSwiper } from "./modules/arc-service.js";
import { init } from "./modules/capstone-swiper.js";

parnersSwiperTop;
parnersSwiperLower;
vacancySwiper;
projectCardSwiper;
arcTabSwiper;
init();

let capstoneSwiper = new Swiper(".slider-capstone", {
  spaceBetween: 20,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".capstone-pag",
    type: "progressbar",
  },
});

// SWIPERS
let swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
let arcticSwiper = new Swiper(".arctic-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

let swiper1 = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination1",
    type: "progressbar",
  },
  spaceBetween: 20,
  slidesPerView: "auto",
  breakpoints: {
    475: {
      centeredSlides: true,
    },
    752: {
      slidesPerView: "auto",
    },
    880: {
      slidesPerView: 2.5,
    },
    960: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1150: {
      slidesPerView: 4,
    },
    1320: {
      slidesPerView: 4.5,
    },
    1440: {
      slidesPerView: 4.5,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 100,
    stretch: -55,
    depth: 100,
    modifier: 0,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 0,
  breakpoints: {
    880: {
      slidesPerView: 3,
      initialSlide: 1,
    },
  },
});

var newsSwiper = new Swiper(".news-swiper", {
  spaceBetween: 20,
  slidesPerView: "auto",
  enabled: true,
  speed: 400,
  breakpoints: {
    950: {
      enabled: false,
    },
  },
});

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
});

import HystModal from "./hystmodal";
global.HystModal = HystModal;

// press center tabs
const tabs = document.querySelector(".q-news-body");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tabBtn.forEach((el) => {
  el.addEventListener("click", openTabs);
});
function openTabs(el) {
  var btnTarget = el.currentTarget;
  var tab = btnTarget.dataset.tab;
  tabContent.forEach(function (el) {
    el.classList.remove("tab-content-active");
  });
  tabBtn.forEach(function (el) {
    el.classList.remove("active-tab-btn");
  });
  document.querySelector("#" + tab).classList.add("tab-content-active");
  btnTarget.classList.add("active-tab-btn");
}
// arctic services tabs
const tabsArctic = document.querySelector(".q-arc-service__body");
const tabArcContent = document.querySelectorAll(".q-service-body");

const tabArcBtn = document.querySelectorAll(".arc-tab-btn");
tabArcBtn.forEach((e) => {
  e.addEventListener("click", openTabsArc);
});

function openTabsArc(el) {
  let btnTarget = el.currentTarget;
  let tab = btnTarget.dataset.tabArc;
  tabArcContent.forEach((el) => {
    el.classList.remove("tab-content-active");
  });
  tabArcBtn.forEach((e) => {
    e.classList.remove("active-arc-tab-btn");
  });
  document.querySelector("#" + tab).classList.add("tab-content-active");
  btnTarget.classList.add("active-arc-tab-btn");
}

// scroll header
scrollHeader();

// header burger
const burgerBtn = document.querySelector(".navTrigger");
const topHeader = document.querySelector(".header-top");
const navBg = document.querySelector(".header-content");
const nav = document.querySelector(".nav-items");
const navItem = document.querySelectorAll(".nav-item");
const hr = document.querySelector(".hr");
const navWrapper = document.querySelector(".nav-items__wrapper");
const header = document.querySelector(".header");

let pageY = window.innerHeight - window.innerHeight + 1;

burgerBtn.addEventListener("click", function () {
  header.classList.toggle("active-white-header");
  topHeader.classList.toggle("active-bg");
  nav.classList.toggle("vertical");
  burgerBtn.classList.toggle("active-burger");

  if (burgerBtn.classList.contains("active-burger")) {
    hr.style.display = "none";
    document.body.style.overflow = "hidden";
    if (window.scrollY >= 50) {
      header.classList.remove("scrolled-header");
    }
  } else {
    hr.style.display = "block";
    document.body.style.overflow = "unset";
    setTimeout(() => {
      window.scrollBy(0, pageY);
    }, 10);
  }
  if (nav.classList.length >= 4) {
    nav.style.position = "relative";
    navWrapper.style.top = "0";
    navItem.forEach((el) => {
      el.style.position = "unset";
    });
  } else {
    nav.style.position = "unset";
    navWrapper.style.top = "-800px";
    navItem.forEach((el) => {
      el.style.position = "relative";
    });
  }
});

const mobBurger = document.querySelector(".navTrigger2");
const mobWrapper = document.querySelector(".nav-mob__wrapper");
const navSearch = document.querySelector(".icon-search");

mobBurger.addEventListener("click", function () {
  mobBurger.classList.toggle("active-burger");
  mobWrapper.classList.toggle("active-mob__wrapper");
  if (mobWrapper.classList.contains("active-mob__wrapper")) {
    mobBurger.classList.add("stroke-white");
    navSearch.classList.add("search-scrolled");
    document.body.style.overflow = "hidden";
  } else {
    mobBurger.classList.remove("stroke-white");
    navSearch.classList.remove("search-scrolled");
    document.body.style.overflow = "unset";
  }
});

if (document.querySelector(".q-form-phone")) {
  phoneValidate();
}
if (document.querySelector(".map")) {
  // ready();
  console.log(" with map page");

  

  // let dotCircle = document.querySelector(`[data-dota='${0}']`);
  // dotCircle.click()
  let closeBtnCard = document.querySelector(".close-hide");
  closeBtnCard.click();

  let mapCardHideSwiper = new Swiper(".card-hide__swiper", {
    spaceBetween: 45,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 1500,
    },
    // autoplayDisableOnInteraction:false,
  });
  mapCardHideSwiper.autoplay.stop();

  mapCardHideSwiper.on("slideChange", function () {
    mapCardHideSwiper.onAny(function () {
      let circle = document.querySelectorAll(".circle");
      circle.forEach((el) => {
        el.style.display = "none";
      });
      mapCardHideSwiper.autoplay.start();
      if (mapCardHideSwiper.activeIndex == 0) {
        let circle2 = document.querySelector(`[data-id='${0}']`);

        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 1) {
        let circle2 = document.querySelector(`[data-id='${1}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 2) {
        let circle2 = document.querySelector(`[data-id='${2}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 3) {
        let circle2 = document.querySelector(`[data-id='${3}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 4) {
        let circle2 = document.querySelector(`[data-id='${4}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 5) {
        let circle2 = document.querySelector(`[data-id='${5}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 6) {
        let circle2 = document.querySelector(`[data-id='${6}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 7) {
        let circle2 = document.querySelector(`[data-id='${7}']`);
        circle2.style.display = "block";
      }
      if (mapCardHideSwiper.activeIndex == 8) {
        let circle2 = document.querySelector(`[data-id='${8}']`);
        circle2.style.display = "block";
      }
    });
  });
}


// MAP RUSSIA
const mapBig = document.querySelector(".map-russia-svg");
var pt = mapBig.createSVGPoint();

function toggleDone(event) {
  console.dir(event.target);
  event.target.style.fill = "black";
  pt.x = event.clientX;
  pt.y = event.clientY;

  var cursorpt =  pt.matrixTransform(mapBig.getScreenCTM().inverse());
    console.log("(" + cursorpt.x + ", " + cursorpt.y + ")");
}

if(document.querySelector('.map-picker')) {
  mapBig.addEventListener("click", toggleDone);

}
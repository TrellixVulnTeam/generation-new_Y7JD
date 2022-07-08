import {
  parnersSwiperTop,
  parnersSwiperLower,
} from "./modules/partners-swiper.js";
import { ready } from "./modules/map-main.js";
import { vacancySwiper } from "./modules/vacancys-swiper.js";
import { phoneValidate } from "./modules/phone-number.js";
import { projectCardSwiper } from "./modules/project-swiper.js";
import { scrollHeader } from "./modules/scroll-header.js";

parnersSwiperTop;
parnersSwiperLower;
vacancySwiper;
projectCardSwiper;

// SWIPERS
let swiper = new Swiper(".mySwiper", {
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
  slidesPerView: 3,
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
  initialSlide: 1,
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

window.onload = function () {
  if (document.querySelector(".map")) {
    ready();
  }
};
window.onload = function () {
  if (document.querySelector(".q-form-phone")) {
    phoneValidate();
  }
};

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

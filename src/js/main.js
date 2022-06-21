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

// scroll header
scrollHeader

let swiper = new Swiper(".mySwiper", {
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
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 100,
    stretch: -50,
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

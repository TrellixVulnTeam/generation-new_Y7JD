import { parnersSwiperTop, parnersSwiperLower  } from './modules/partners-swiper.js'
import { ready } from './modules/map-main.js'

parnersSwiperTop
parnersSwiperLower

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
  }
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
    }
  }
})

window.onload = function() {
  if(document.querySelector('.map ')) {
    ready();
  }
}
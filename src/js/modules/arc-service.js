let arcTabSwiper = new Swiper(".q-arc-tab-swiper", {
  spaceBetween: 10,
  freemode: true,
  slidesPerView: 'auto',
  allowTouchMove: true,
  enabled: true,
  grabCursor: true,
  simulateTouch: true,
  breakpoints: {
    1260: {
      enabled: false,
    },
  },
});

export { arcTabSwiper  }
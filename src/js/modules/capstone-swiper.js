function init() {
  let capstoneImgItemLower = new Swiper(".capstone-item-swiper-lower", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  touchRatio: 0.2,
});

let capstoneImgItemTop = new Swiper(".capstone-item-swiper-top", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  thumbs: {
    swiper: capstoneImgItemLower,
  },
});
}

export { init };

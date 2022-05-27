var parnersSwiperTop = new Swiper(".partners--top", {
  spaceBetween: 20,
  centeredSlides: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 4,
  allowTouchMove: true,
  disableOnInteraction: true,
});

var parnersSwiperLower = new Swiper(".partners--lower", {
  spaceBetween: 20,
  centeredSlides: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 4,
  allowTouchMove: true,
  disableOnInteraction: true,
});


export { parnersSwiperTop, parnersSwiperLower };
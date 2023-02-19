var swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
var swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

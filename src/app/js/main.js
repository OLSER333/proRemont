import '../css/style.scss'

import Swiper, {Navigation, Pagination, Thumbs} from "swiper";
import '../../../node_modules/swiper/swiper-bundle.css';
// import '../../../node_modules/swiper/swiper-bundle.js';


import burger from "./module/burger";
import quiz from "./module/quiz";

import swipers from './module/swipers'
import initSliders from "./module/swipers";
import maskPhone from "./module/maskPhone";
import smoothAnchors from "./module/smooth-anchors";
import modal from "./module/modal";

// import v from "./module/v";

document.addEventListener("DOMContentLoaded", () => {
  burger()
  modal()
  quiz()
  maskPhone()
  smoothAnchors()
  // initSliders()
  const swiperWork = new Swiper('.works__swiper', {
    modules: [Navigation],
    // slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    slidesPerView: 2,
    grabCursor: true,
    simulateTouch: true,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      clickable: true,
      nextEl: '.works__swiper-button-next',
      prevEl: '.works__swiper-button-prev',
    },


    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3
      }
    }
  })

  const swiperServs = new Swiper('.servs__swiper', {
    // slidesPerView: 3,
    spaceBetween: 0,
    loop: false,
    // slidesPerView: 4,
    // slidesPerGroup: 1,
    // watchOverflow: true,
    // centeredSlides: true,


    breakpoints: {
      // 320: {
      //   slidesPerView: 1
      // },
      320: {
        slidesPerView: 1.3,
      },
      440: {
        slidesPerView: 1.5,
      },
      500: {
        slidesPerView: 1.8,
      },
      700: {
        slidesPerView: 2.5,
      },
      900: {
        slidesPerView: 3.5,
      },
      1100: {
        slidesPerView: 4,
        // centeredSlides: true,

      },
      1440: {
        slidesPerView: 4,
        // slidesPerGroup: 4,
        // centerInsufficientSlides: true,
        // initialSlide: 3,


      }
    }
  })

  const swiperTeam = new Swiper('.team__swiper', {
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      380: {
        slidesPerView: 1.4,
      },
      550: {
        slidesPerView: 1.7,
      },
      800: {
        slidesPerView: 2.4,
      },
      1000: {
        slidesPerView: 3.4,
      },
      1200: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 4,
      }
    }
  })

  const swiperQuiz = new Swiper('.quiz__swiper', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    allowTouchMove: false,
    autoHeight: true,

    pagination: {
      el: '.quiz__pagination',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<span class="dot swiper-pagination-bullet">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: '.quiz__swiper-button-next',
      prevEl: '.quiz__swiper-button-prev',
    },


  })

// ???????????????????? swipers
  const innerSwipersNodes = document.querySelectorAll('.swiper-thumbs-list')
  const thumbsSwipersNodes = document.querySelectorAll('.swiper-for-thumbs')

  const innerSwipers = []
  innerSwipersNodes.forEach((e, idx) => {
    innerSwipers.push(new Swiper(e, {
      watchSlidesProgress: true,
      allowTouchMove: false,
    }))
  })
  const thumbsSwipers = []
  thumbsSwipersNodes.forEach((e, idx) => {
    thumbsSwipers.push(new Swiper(e, {
      modules: [Thumbs],
      allowTouchMove: false,
      thumbs: {
        swiper: innerSwipers[idx],
      }
    }));
  })


})

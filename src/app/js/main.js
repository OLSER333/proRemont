import '../css/style.scss'

import Swiper, {Navigation} from "swiper";
import '../../../node_modules/swiper/swiper-bundle.css';



import burger from "./module/burger";
import swipers from './module/swipers'
import initSliders from "./module/swipers";



// import v from "./module/v";

document.addEventListener("DOMContentLoaded", () => {
  burger()
  // initSliders()
  const swiperWork = new Swiper('.works__swiper', {
    modules: [Navigation],
    // slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    slidesPerView: 2,
    grabCursor: true,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      clickable: true,
      nextEl: '.works__swiper-button-next',
      prevEl: '.works__swiper-button-prev',
    },


    breakpoints: {
      // 320: {
      //   slidesPerView: 1
      // },
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




})

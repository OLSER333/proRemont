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






})

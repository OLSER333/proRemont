import '../css/style.scss'

import Swiper, {Navigation} from "swiper";
import '../../../node_modules/swiper/swiper.scss';
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
    centeredSlides: true,
    initialSlide: 2,
    navigation: {
      clickable: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })






})

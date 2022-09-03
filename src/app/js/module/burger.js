import v from "./variables/v";

export default function() {
  const hero = document.querySelector('.hero')
  const header = document.querySelector('.header')
  const wrapBurg = document.querySelector('.header__wrap-burg')
  const burg = document.querySelector('.header__burg')
  const nav = document.querySelector('.header__nav')
  const wrapNav = document.querySelector('.header__wrap-nav')


  function toggleBurg() {
    burg.classList.toggle('header__burg--open')
    header.classList.toggle('header--burg-open')
    nav.classList.toggle('header__nav--burg-open')
    wrapNav.classList.toggle('header__wrap-nav--open-blur')
  }

  if(document.documentElement.clientWidth <= v.toBurger) {
    hero.after(header)
  }

  window.addEventListener('resize', (e) => {
    if(document.documentElement.clientWidth > v.toBurger) {
      document.querySelector('.page').prepend(header)
      if(document.querySelector('.header__burg--open')) {
        toggleBurg()
      }
    }
    if(document.documentElement.clientWidth <= v.toBurger) {
      hero.after(header)
    }
  })

  wrapBurg.addEventListener('click', () => {
    toggleBurg()


  })

  wrapNav.addEventListener('click',(e) => {
    if(e.target.closest('.header__wrap-nav--open-blur') && !e.target.closest('.header__nav')) {
      toggleBurg()
    }
  })


}


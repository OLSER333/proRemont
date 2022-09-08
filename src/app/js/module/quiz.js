

export default function () {


  const allForms = document.querySelectorAll('.q-slide__form')

  const nextBtn = document.querySelector('.quiz__swiper-button-next')
  const prevBtn = document.querySelector('.quiz__swiper-button-prev')

  const pagin = document.querySelector('.quiz__pagination')


  setTimeout(() => {
    nextBtn.classList.add('swiper-button-disabled');
    prevBtn.classList.add('quiz-hidden')
  }, 0)

  const qState = {
    //!!!!!
    dataToMail: [],
    curPos: 0,
  }

  //заполнили dataToMail
  for (let i = 0; i < allForms.length; i++) {
    qState.dataToMail.push('')
  }



  allForms.forEach((el, idx) => {
    el.addEventListener('input', (e) => {
      qState.dataToMail[idx] = e.target.value
      nextBtn.classList.remove('swiper-button-disabled')


      const paginDots = document.querySelectorAll('.swiper-pagination-bullet')
      paginDots[qState.curPos].classList.add('swiper-pagination-bullet-done')
    })
  })

  nextBtn.addEventListener('click', () => {
    if (qState.dataToMail.includes('')) {

      if (qState.dataToMail[qState.curPos + 1] === '') { // если ещё не выбирали

        // ассинхронность т.к. swiper переназначает классы
        setTimeout(() => {
          nextBtn.classList.add('swiper-button-disabled');
        }, 0)
      }
    } else if(qState.curPos + 1 === qState.dataToMail.length) {
      setTimeout(() => {
        prevBtn.classList.add('quiz-hidden')
        nextBtn.classList.add('quiz-hidden')
      }, 0)

    }
    if(qState.curPos === 0) {
      prevBtn.classList.remove('quiz-hidden')
    }

    qState.curPos++
  })

  prevBtn.addEventListener('click', () => {
    if(qState.curPos === 1) {
      prevBtn.classList.add('quiz-hidden')
    }
    qState.curPos--;
  })









  document.querySelector('.q-slide__inp').addEventListener('submit', (e) => {
    e.preventDefault()

    qState.dataToMail.push(document.querySelector('#quiz-phone').value)

      //! !!!  ЭТО НА ПОЧТУУУУУУУУУУУУУУ
    console.log('На почту ', qState.dataToMail)
    //! !!!  ЭТО НА ПОЧТУУУУУУУУУУУУУУ


    document.querySelector('.q-slide__after-quiz').classList.remove('quiz-hidden')
    document.querySelector('.q-slide__send-form').classList.add('quiz-hidden')


  })

}

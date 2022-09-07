

export default function () {


  const allForms = document.querySelectorAll('.q-slide__form')

  const nextBtn = document.querySelector('.quiz__swiper-button-next')
  const prevBtn = document.querySelector('.quiz__swiper-button-prev')

  console.log("where&???")
  setTimeout(() => {
    nextBtn.classList.add('swiper-button-disabled');
  }, 0)
  console.log(nextBtn.classList)

  const qState = {
    //!!!!!
    dataToMail: [],
    curPos: 0,
  }

  //заполнили dataToMail
  for (let i = 0; i < allForms.length; i++) {
    qState.dataToMail.push('')
  }



  console.log('allForms', allForms)
  allForms.forEach((el, idx) => {
    el.addEventListener('input', (e) => {
      console.log('input: ', e.target.value)
      console.log(el, idx)
      qState.dataToMail[idx] = e.target.value
      console.log('want remove')
      nextBtn.classList.remove('swiper-button-disabled')

    })
  })

// del
  //==================================================================
  const button = document.querySelector('.usual-header--serv')
  button.addEventListener('click', () => {
    console.log('answ', qState.dataToMail)
    console.log('data', qState)
  })
  //==================================================================

  nextBtn.addEventListener('click', () => {
    if (qState.dataToMail.includes('')) {
      console.log('realy, includes, cur pos ', qState.curPos)
      if (qState.dataToMail[qState.curPos + 1] === '') { // если ещё не выбирали
        console.log("have ''", qState.dataToMail[qState.curPos+1])
        // ассинхронность т.к. swiper переназначает классы
        setTimeout(() => {
          nextBtn.classList.add('swiper-button-disabled');
        }, 0)
      }
    } else {
      // выбрали последний элемент, хотят нажать на след слайд -> поменять текст в кнопке и дать 5-ый слайд.?
      // или hidden + новые кнопки и т д??
      // если hidden - вспомни убрать его при шаге назад
    }
    qState.curPos++
  })

  prevBtn.addEventListener('click', () => {
    qState.curPos--;
  })
}

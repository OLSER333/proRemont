export default function () {


  const sendModalBtn = document.querySelector('.usual-btn--send-modal')
  const modalForm = document.querySelector('.modal__form')
  const closeModalBtn = document.querySelector('.modal__close-btn')

  const modalWindow = document.querySelector('.modal')


  modalWindow.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
      modalWindow.classList.remove('modal-hidden')
    }
  })



  closeModalBtn.addEventListener('click', () => {
    modalWindow.classList.add('modal-hidden')
  })



  modalForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('formSended', e)
    const modalData = [e.target.children[1].value, e.target.children[3].value]

    // !! ДАННЫЕ ИЗ МОДАЛКИ!!!!!!!!!
    console.log('ДАННЫЕ ИЗ МОДАЛКИ', modalData)
    // !! ДАННЫЕ ИЗ МОДАЛКИ!!!!!!!!!

    //!!! Текст сообщения об отправке данных
    const txtSuccess = 'Спасибо! Мы вам перезвоним!'


    document.querySelector('.usual-btn--send-modal').classList.add('modal-hidden')
    document.createElement('p', {textContent: txtSuccess, className: 'modal__sussess-txt'})
    setTimeout(() => {


      modalWindow.classList.add('modal-hidden')
      document.querySelector('.usual-btn--send-modal').classList.remove('modal-hidden')
    }, 3000)

  })


  const modalBtns = document.querySelectorAll('[data-open-modal]')
  console.log('123', modalBtns)
  modalBtns.forEach(el => {
    el.addEventListener('click', () => {
      modalWindow.classList.remove('modal-hidden')
    })
  })
}

import './createEl';
import createEl from "./createEl";

export default function () {


  const sendModalBtn = document.querySelector('.usual-btn--send-modal')
  const modalForm = document.querySelector('.modal__form')
  const closeModalBtn = document.querySelector('.modal__close-btn')

  const modalWindow = document.querySelector('.modal')


  modalWindow.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
      modalWindow.classList.add('modal-hidden')
    }
  })



  closeModalBtn.addEventListener('click', () => {
    modalWindow.classList.add('modal-hidden')
  })



  modalForm.addEventListener('submit', e => {
    e.preventDefault()
    const modalData = [e.target.children[1].value, e.target.children[3].value]




    // !! ДАННЫЕ ИЗ МОДАЛКИ!!!!!!!!!
    console.log('ДАННЫЕ ИЗ МОДАЛКИ', modalData)
    // !! ДАННЫЕ ИЗ МОДАЛКИ!!!!!!!!!

    //!!! Текст сообщения об отправке данных
    const txtSuccess = 'Спасибо! Мы вам перезвоним!'
    //!!! Текст сообщения об отправке данных




   sendModalBtn.classList.add('modal-display-none')
    const sussessPopup = createEl('p', {textContent: txtSuccess, className: 'modal__sussess-txt'})
    modalForm.after(sussessPopup)
    setTimeout(() => {
      modalWindow.classList.add('modal-hidden')
      setTimeout(() => {
        sussessPopup.remove()
        sendModalBtn.classList.remove('modal-display-none')
        e.target.children[1].value = '';
        e.target.children[3].value = '';
      }, 300)
    }, 4000)

  })


  const modalBtns = document.querySelectorAll('[data-open-modal]')
  console.log('123', modalBtns)
  modalBtns.forEach(el => {
    el.addEventListener('click', () => {
      modalWindow.classList.remove('modal-hidden')
    })
  })
}

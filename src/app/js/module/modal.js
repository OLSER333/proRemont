import './createEl';
import createEl from "./createEl";

export default function () {


  const sendModalBtn = document.querySelector('.usual-btn--send-modal')
  const modalForm = document.querySelector('.modal__form')
  const closeModalBtn = document.querySelector('.modal__close-btn')

  const modalWindow = document.querySelector('.modal')



  modalWindow.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
      document.body.classList.remove('lock')
      modalWindow.classList.add('modal-hidden')
    }
  })



  closeModalBtn.addEventListener('click', () => {
    document.body.classList.toggle('lock')
    modalWindow.classList.add('modal-hidden')
  })

  // async function sendDataToPhp(data) {
  //   let response = await fetch('./mail.php', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body: JSON.stringify(data)
  //   });
  //
  //   let result = await response.json();
  //   alert(result.message);
  // }

  modalForm.addEventListener('submit', e => {
    e.preventDefault()
    const modalData = [e.target.children[1].value, e.target.children[3].value]




    // !! ДАННЫЕ ИЗ МОДАЛКИ!!!!!!!!!
    // console.log('ДАННЫЕ ИЗ МОДАЛКИ', modalData)

    // $(document).ready(function () {
//       $('form').submit(function () {
//         var formID = $(this).attr('id'); // Получение ID формы
//         var formNm = $('#' + formID);
//         $.ajax({
//           type: 'POST',
//           url: 'mail.php', // Обработчик формы отправки
//           data: formNm.serialize(),
//           success: function (data) {
// // Вывод текста результата отправки в текущей форме
//             $(formNm).html(data);
//           }
//         });
//         return false;
//       });
//     });
    // !! ДАННЫЕ ИЗ МОДАЛКИ!!!!!!!!!
    // sendDataToPhp(modalData)


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
        document.body.classList.remove('lock')
      }, 300)
    }, 4000)

  })


  const modalBtns = document.querySelectorAll('[data-open-modal]')
  modalBtns.forEach(el => {
    el.addEventListener('click', () => {
      modalWindow.classList.remove('modal-hidden')
      document.body.classList.toggle('lock')
    })
  })
}

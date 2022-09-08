export default function () {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').slice(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',

      })
    })
  }

}

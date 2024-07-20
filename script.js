const $container = document.querySelector('.container')

setInterval(
  () => {
    const $slat = $container
      .firstElementChild
    $slat.remove()
    $container.appendChild($slat)
  },
  1000

)
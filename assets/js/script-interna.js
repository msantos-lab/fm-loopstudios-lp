const btnMobileI = document.getElementById('btn-mobile')

function toggleMenuI(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav-interna')
  nav.classList.toggle('active-interna')

  const topmenuInterna = document.getElementById('top-interna')
  topmenuInterna.classList.toggle('topmenu-interna')
}

btnMobileI.addEventListener('click', toggleMenuI)
btnMobileI.addEventListener('touchstart', toggleMenuI)

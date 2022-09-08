const menu = document.getElementById('menu')
const btnOpen = document.getElementById('menu_open')
const btnClose = document.getElementById('menu_close')

btnClose.onclick = function () {
  menu.classList.add('menu--close')
}

btnOpen.onclick = function () {
  menu.classList.remove('menu--close')
}

menu.addEventListener('click', function (event) {
  if (event.target.matches('.menu__link')) {
    menu.classList.add('menu--close')
  }
})

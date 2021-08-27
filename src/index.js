// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ИМПОРТЫ --------------------------------
// ----------------------------------------------------------------------------

// import aaa from './js/db.js'

import menuArr from './menu.json'
import menuItem from './templates/menu-items.hbs'

// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ДОСТУПЫ --------------------------------
// ----------------------------------------------------------------------------

//

// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ФУНКЦИИ --------------------------------
// ----------------------------------------------------------------------------

//

// ----------------------------------------------------------------------------
// ------------------------------ ВСЕ СЛУШАТЕЛИ -------------------------------
// ----------------------------------------------------------------------------

//
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// }
const bodyRef = document.body

const inputEl = document.getElementById('theme-switch-toggle')

inputEl.addEventListener('change', () => {
  if (inputEl.checked) {
    bodyRef.classList.add('dark-theme')
    bodyRef.classList.remove('light-theme')
    localStorage.setItem('theme', 'dark-theme')
  } else {
    bodyRef.classList.add('light-theme')
    bodyRef.classList.remove('dark-theme')
    localStorage.setItem('theme', 'light-theme')
  }
})

let className = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

if (className) {
  bodyRef.setAttribute('class', className)

  if (className === 'dark-theme') {
    inputEl.checked = 'true'
  }
}

const menuRef = document.querySelector('.js-menu')
const markup = menuItem(menuArr)
menuRef.insertAdjacentHTML('beforeend', markup).trim()
const menuItems = Handlburs.compire(menuArr)
console.log(menuRef)

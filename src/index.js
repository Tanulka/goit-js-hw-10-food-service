// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ИМПОРТЫ --------------------------------
// ----------------------------------------------------------------------------

import aaa from './js/db'

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

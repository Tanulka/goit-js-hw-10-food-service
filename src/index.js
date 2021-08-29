import menuArr from './menu.json';
import menuItem from './templates/menu-items.hbs';

const bodyRef = document.body;

const inputEl = document.getElementById('theme-switch-toggle');

inputEl.addEventListener('change', handleChecked);
function handleChecked() {
  if (inputEl.checked) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

const themeLS = localStorage.getItem('theme');
let className = themeLS ? themeLS : null;

if (className) {
  bodyRef.setAttribute('class', className);

  if (className === 'dark-theme') {
    inputEl.checked = 'true';
  }
}

const menuRef = document.querySelector('.js-menu');
const markup = menuItem(menuArr);
menuRef.insertAdjacentHTML('beforeend', markup);

import menuTemplate from './templates/list-item.hbs';
import menuElement from './menu.json';

const refs = {
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle'),
};

const markupCardMenu = createMenu(menuElement);

refs.menu.insertAdjacentHTML('beforeend', markupCardMenu);

function createMenu(menuElement) {
    return menuElement.map(menuTemplate).join('');
}

// change Theme
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', changeTheme);
refs.switch.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);

function changeTheme(e) {
  const check = refs.switch.checked;

  if (check) {
    setDarkTheme()
  } else {
    setLightTheme()
  }
}

function setLocalStorage(e) {
  const check = refs.switch.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function getThemeFromLocalStorage() {
  const themeInLocal = localStorage.getItem('theme');
  if (themeInLocal === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  }
}

function setDarkTheme() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}
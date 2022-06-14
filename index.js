window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav-list'),
    menuItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.menu_hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
  });
});

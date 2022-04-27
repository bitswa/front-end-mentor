const sidebar = document.querySelector('.c-side-bar');
const menu = document.querySelector('.c-menu-icon');

document.querySelectorAll('.submenu').forEach(e => {

   e.addEventListener('click', () => {
      if (e.firstElementChild.classList.contains('u-color-black')) {
         e.firstElementChild.classList.remove('u-color-black');
         e.firstElementChild.nextElementSibling.src = "images/icon-arrow-down.svg";
         e.lastElementChild.classList.remove('u-visible');
         return
      }
      e.firstElementChild.classList.add('u-color-black');
      e.firstElementChild.nextElementSibling.src = "images/icon-arrow-up.svg";
      e.lastElementChild.classList.add('u-visible');

   });

});

document.querySelector('.c-menu-icon').addEventListener('click', () => {

   if(sidebar.classList.contains('u-visible')) {
      sidebar.classList.remove('u-visible');
      menu.src = "images/icon-menu.svg";
      return
   }

   sidebar.classList.add('u-visible')
   menu.src = "images/icon-close-menu.svg";
   
});
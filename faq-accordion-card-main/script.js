document.querySelectorAll("._list-title_box").forEach(e => {

   e.addEventListener('click', () => {

      // if it's already open

      if (e.parentNode.lastElementChild.classList.contains('active')) {

         e.parentNode.lastElementChild.classList.toggle('active');

         // style
         e.firstElementChild.classList.toggle('title-active');
         e.lastElementChild.style.transform = "rotate(0deg)";

         return
      };

      // if you close

      document.querySelectorAll('._list-title_box').forEach(e => {

         e.parentNode.lastElementChild.classList.remove('active');

         // style
         e.firstElementChild.classList.remove('title-active');
         e.lastElementChild.style.transform = "rotate(0deg)";

         return
      });

      // else

      e.parentNode.lastElementChild.classList.add('active');
      e.firstElementChild.classList.add('title-active');
      e.lastElementChild.style.transform = "rotate(180deg)";

   })
});
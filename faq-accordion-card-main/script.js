
const listTitle = document.querySelectorAll("._list-title_box");

listTitle.forEach(e => {

   e.addEventListener('click', () => {

      

      if (e.parentNode.lastElementChild.classList.contains('active')) {

         e.parentNode.lastElementChild.classList.toggle('active');

         e.firstElementChild.style.color = "var(--color-dark-grayish-blue)"
         e.lastElementChild.style.transform = "rotate(0 deg)"

         return
      }

      document.querySelectorAll('._list-title_box').forEach(e => {

         e.parentNode.lastElementChild.classList.remove('active');

         e.firstElementChild.style.color = "var(--color-dark-grayish-blue)"
         e.lastElementChild.style.transform = "rotate(0deg)"

         return
      })

      e.parentNode.lastElementChild.classList.add('active')
      e.firstElementChild.style.color = "var(--color-very-dark-desaturated-blue)"
      e.lastElementChild.style.transform = "rotate(180deg)"

   })
});


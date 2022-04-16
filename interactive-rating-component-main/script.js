const btns = document.querySelectorAll('._feedback__button')
let score = 3 // default

btns.forEach(event => {
   event.addEventListener('click', btnClick);

});

function btnClick(event) {
   btns.forEach(btn => {
      btn.classList.remove('active');
   });
   
   if (event.target.classList.contains('_feedback__button')) {
      event.target.classList.add('active')
   }
   score = event.target.textContent;
}

document.querySelectorAll('._submit').forEach(e => {
   e.onclick = () => {
      document.getElementById("_main").style.display = 'none'
      document.getElementById("_after").style.display = 'block'
      document.getElementById('stars').innerHTML = score
   }
})
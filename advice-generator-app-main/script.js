const $id = document.querySelector('.c-advice__id');
const $advice = document.querySelector('.c-quote');
const $random = document.querySelector('.c-circle');

const fetchAdvice = () => {
   fetch("https://api.adviceslip.com/advice", {cache: 'no-store'})
      .then(response => {
         response.json().then( res => {
            $id.textContent = res.slip.id;
            $advice.textContent = `"${res.slip.advice}"`;
         });
      })
      .catch(err => console.log(err));
}

fetchAdvice();
$random.addEventListener('click', fetchAdvice);
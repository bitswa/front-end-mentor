const id = document.querySelector('.c-advice__id');
const advice = document.querySelector('.c-quote');

const fetchAdvice = async () => {
   const res = await fetch("https://api.adviceslip.com/advice", {cache: 'no-store'});
   const data = await res.json();

   id.textContent = data.slip.id;
   advice.textContent = `"${data.slip.advice}"`;
   
}
fetchAdvice();

document.querySelector('.c-circle').addEventListener('click', fetchAdvice);
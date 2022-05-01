let $bill = document.querySelector('#bill'),
   $people = document.querySelector('#people'),
   $options = document.querySelectorAll('.opt'),
   $alert = document.querySelector('.c-alert')

let $tip = document.querySelector('#tip'),
   $total = document.querySelector('#total'),
   $reset = document.querySelector('.c-reset');

let resetInputs = () => {
   $options.forEach(e => e.classList.remove('isActive'));
}

$options.forEach(event => {
   event.addEventListener('click', () => {

      resetInputs();

      event.classList.add('isActive');

      if(event.type == "text") {
         return update(event.value / 100);
      }

      update(event.firstElementChild.innerHTML / 100);
   })
});

function update(btnValue) {
   billValue = parseFloat($bill.value);
   peopleValue = parseFloat($people.value);

   $people.parentElement.classList.remove('inAlert');
   $alert.classList.remove('inAlert')

   if (peopleValue >= 1) {
      let tip = (billValue * btnValue) / peopleValue;
      let total = (billValue + tip) / peopleValue;	
      
      $tip.textContent = "$" + tip.toFixed(2);
      $total.textContent = "$" + total.toFixed(2);
      return
   } 

   $people.parentElement.classList.add('inAlert');
   $alert.classList.add('inAlert');
}  

$reset.addEventListener('click', () => {

   resetInputs();
   $bill.value = 0;
   $people.value = 0;
   $tip.textContent = '$' + (0.0).toFixed(2);
   $total.textContent = '$' + (0.0).toFixed(2);
})
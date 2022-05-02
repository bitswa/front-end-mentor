let $headerBox = document.querySelector('.c-header__box'),
   $headerIcon = document.querySelector('.c-hamburguer');

$headerIcon.addEventListener('click', e => {

   if($headerBox.classList.contains('isVisible')) {
      $headerBox.classList.remove('isVisible');
      return
   }

   $headerBox.classList.add('isVisible');
})
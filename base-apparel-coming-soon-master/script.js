const email = document.querySelector('.email')
const iconError = document.querySelector('#img-error')
const msgError = document.querySelector('.msg_error')

document.querySelector('.email__btn').addEventListener('click', event => {
   if (!email.value.endsWith("@gmail.com")) {

      iconError.classList.remove('is-hidden');
      msgError.classList.remove('is-hidden');
      return
   }

   iconError.classList.add('is-hidden');
   msgError.classList.add('is-hidden');
})
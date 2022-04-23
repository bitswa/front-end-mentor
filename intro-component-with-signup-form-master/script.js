const password = document.getElementById('password'),
   email = document.getElementById('email'),
   firstName = document.getElementById("firstName"),
   lastName = document.getElementById("lastName"),
   inputBox = document.querySelectorAll('.card__input_box'),
   errorMsg = document.querySelectorAll('.input-erro'),
   imageError = document.querySelectorAll('.image-erro')

document.getElementById('btn').addEventListener('click', (e) => {

   e.preventDefault();

   inputBox.forEach(event => { event.classList.remove('border-error') });

   errorMsg.forEach(event => { event.style.display = "none" });

   imageError.forEach(event => { event.style.display = "none" });


   if (firstName.value == "") {

      document.getElementById('firstName-error').style.display = "block";
      document.getElementById('first-img-error').style.display = "block";
      firstName.parentElement.classList.add('border-error');

   }

   if (lastName.value == "") {

      document.getElementById('lastName-error').style.display = "block";
      document.getElementById('second-img-error').style.display = "block";

      lastName.parentElement.classList.add('border-error');
      
   }

   if (email.value == "") {
      
      document.getElementById('email-error').style.display = "block";
      document.getElementById('third-img-error').style.display = "block";

      email.parentElement.classList.add('border-error');
      
   }

   if (password.value == "") {

      document.getElementById('password-error').style.display = "block";
      document.getElementById('fourth-img-error').style.display = "block";

      password.parentElement.classList.add('border-error');
      
   }

})
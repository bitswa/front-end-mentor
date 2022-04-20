
const shareBox = document.getElementById('share-box')
const circle = document.getElementById('circle')

circle.addEventListener('click', () => {

   if (shareBox.classList.contains('disabled')) {

      shareBox.classList.remove('disabled');
      circle.classList.add('share-bg');
      return
   }

   shareBox.classList.add('disabled');
   circle.classList.remove('share-bg');

});
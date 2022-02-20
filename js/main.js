/*NAVARRRRRR SCRIPT MOBILE*/
const list = document.querySelectorAll('.list');
  function activeLink(){
    list.forEach(
      (item) =>
    item.classList.remove('active2')
    );

   this.classList.add('active2');
  }
  list.forEach((item) => 
  item.addEventListener('click',activeLink));
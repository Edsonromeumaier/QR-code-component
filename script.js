const reference = document.querySelector('#card');
const atribut = document.querySelector('#attribution');

   reference.addEventListener('mouseover', function(event){
   if(atribut.style.display === none){
    atribut.style.display = "grid";
   }else {
    atribut.style.display = "none";
   }
})
    
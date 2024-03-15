// Sticky Navigation Menu JS Code
let nav = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
//Date
var date= new Date();
var year = date.getFullYear();
document.getElementById('nyear').innerHTML = year;




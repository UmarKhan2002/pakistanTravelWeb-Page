const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", this.window.scrollY > 60)
});

let menuIcon = document.getElementById("menu-icon"); 
let navbar = document.querySelector('.navbar'); 

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('open');  
});
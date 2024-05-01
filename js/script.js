/*
#######################
====== HEADER =========
#######################
*/
let buttonNavbar = document.querySelector(".btn-navbar");
let navbar = document.querySelector(".navbar");
let buttonNavbarClose = document.getElementById('close');
let overlay = document.querySelector(".overlay");
buttonNavbar.addEventListener("click",()=>{
  navbar.classList.add("active")
  overlay.classList.add("active");
})
buttonNavbarClose.addEventListener("click",()=>{
  navbar.classList.remove("active");
  overlay.classList.remove("active");
})

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__links');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  });
});


//test

$(document).ready(function() {
  
});
// script.js

const typed = new Typed(".typed", {
  strings: ["Front-End Developer", "JavaScript Enthusiast", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

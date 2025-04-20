// header.js

// Lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
  
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
      });
    }
  });
  
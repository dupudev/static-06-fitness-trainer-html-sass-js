const navbar = document.querySelector('.navbar');
const year = document.querySelector('.year');
const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');
const hiddenElements = document.querySelectorAll('.hide');

/// Navbar scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scroll', window.scrollY > 0);
});

/// Footer date
year.innerText = new Date().getFullYear();

/// Preloader
window.onload = () => {
  preloader.style.opacity = '0';
  body.style.overflow = 'visible';
  preloader.addEventListener('transitionend', () => {
    preloader.style.display = 'none';
  });
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
};

/// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide_in');
    }
  });
});

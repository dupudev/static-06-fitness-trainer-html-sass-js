const navbar = document.querySelector('.navbar');
const year = document.querySelector('.year');
const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');
const hiddenElements = document.querySelectorAll('.hide');
const hiddenBgs = document.querySelectorAll('.hide_bg');

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
  hiddenBgs.forEach((element) => {
    observer2.observe(element);
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

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show_bg');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

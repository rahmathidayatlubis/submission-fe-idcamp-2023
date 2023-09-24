let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const navbar = document.querySelector('.navbar');

function isNavbarFixed() {
  const navbarPosition = navbar.getBoundingClientRect().top;
  return navbarPosition <= 0;
}

// Buat event listener untuk scroll
window.addEventListener('scroll', function() {
  if (isNavbarFixed()) {
    navbar.classList.add('glass-effect');
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('glass-effect');
    navbar.classList.remove('navbar-fixed');
  }
});

let toTop = document.querySelector('#top');

toTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
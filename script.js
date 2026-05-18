// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if(this.getAttribute('href').startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let slideIndex = 1;
showSlide(slideIndex); // <- this ensures first slide shows immediately

// Next/previous controls
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Auto slideshow for Products section
let productAutoSlide = setInterval(() => {
  changeSlide(1);
}, 3500);

const slideshow = document.querySelector(".slideshow-container");

if (slideshow) {
  slideshow.addEventListener("mouseenter", () => {
    clearInterval(productAutoSlide);
  });

  slideshow.addEventListener("mouseleave", () => {
    productAutoSlide = setInterval(() => {
      changeSlide(1);
    }, 3500);
  });
}

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // remove active from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // show the current slide
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const heroPhrases = [
  "Global Sourcing",
  "Fast Delivery",
  "Trusted Marine Solutions"
];

let phraseIndex = 0;
const changingText = document.getElementById("changing-text");

if (changingText) {
  setInterval(() => {
    changingText.classList.add("exit");

    setTimeout(() => {
      phraseIndex++;

      if (phraseIndex >= heroPhrases.length) {
        phraseIndex = 0;
      }

      changingText.textContent = heroPhrases[phraseIndex];

      changingText.classList.remove("exit");

      changingText.style.animation = "none";
      void changingText.offsetWidth;
      changingText.style.animation = "taglineIn 0.65s ease forwards";

    }, 450);

  }, 2600);
}
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  .fade {
    animation: fadeSlide 0.7s ease;
}

@keyframes fadeSlide {
    from {
        opacity: 0.3;
        transform: scale(1.02);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
}

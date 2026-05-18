document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for nav links
  document.querySelectorAll("nav a, .logo-link").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }

        const navMenu = document.getElementById("nav-menu");
        const navbar = document.getElementById("navbar");

        if (navMenu) {
          navMenu.classList.remove("active");
        }

        if (navbar) {
          navbar.classList.remove("menu-open");
        }
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");

  function updateNavbar() {
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);

  // Mobile hamburger menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      if (navbar) {
        navbar.classList.toggle("menu-open");
      }
    });
  }

  // Hero changing text animation
  const heroPhrases = [
    "Global Sourcing.",
    "Fast Delivery.",
    "Trusted Marine Solutions."
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
    }, 2800);
  }

  // Product slideshow start
  showSlide(slideIndex);

  // Product auto slideshow
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
});

// Product slideshow controls
let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0 || dots.length === 0) {
    return;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

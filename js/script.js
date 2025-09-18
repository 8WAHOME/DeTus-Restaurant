// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Contact Form Validation =====
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop form from auto submitting

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email.value)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });
}

// ===== Email Validation Function =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// ===== Slideshow =====
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
}

// Run slideshow every 3s
if (slides.length > 0) {
  setInterval(showSlides, 3000);
}

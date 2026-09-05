// ===== Año en footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Menú hamburguesa =====
var hamburger = document.getElementById('hamburger');
var mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', function () {
  var isOpen = mainNav.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

var navLinks = mainNav.querySelectorAll('a');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    mainNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menú');
  });
}

// ===== Dark mode =====
var themeToggle = document.getElementById('theme-toggle');
var body = document.body;
var savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeToggle.setAttribute('aria-pressed', 'true');
}

themeToggle.addEventListener('click', function () {
  var isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.setAttribute('aria-pressed', String(!isDark));
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// ===== Lazy load con skeleton =====
var projectImages = document.querySelectorAll('.project-img[data-src]');

if ('IntersectionObserver' in window) {
  var imgObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '120px' });

  projectImages.forEach(function (img) {
    img.classList.add('is-loading');
    imgObserver.observe(img);
  });
} else {
  projectImages.forEach(loadImage);
}

function loadImage(img) {
  var realSrc = img.getAttribute('data-src');
  var temp = new Image();
  temp.onload = function () {
    img.src = realSrc;
    img.classList.remove('is-loading');
  };
  temp.onerror = function () {
    img.classList.remove('is-loading');
  };
  temp.src = realSrc;
}

// ===== Reveal on scroll (una sola secuencia por sección) =====
var revealTargets = document.querySelectorAll('.section-title, .project-card, .timeline-item');
revealTargets.forEach(function (el) { el.classList.add('reveal'); });

if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(function (el) { revealObserver.observe(el); });
} else {
  revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
}

// ===== Formulario de contacto =====
var contactForm = document.getElementById('contact-form');
var formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // TODO: conectar con un backend o servicio como Formspree / EmailJS
  formStatus.textContent = '¡Gracias! Tu mensaje quedó registrado. Te responderé pronto.';
  contactForm.reset();
});

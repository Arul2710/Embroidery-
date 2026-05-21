document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();
  initParallax();
  initTiltCards();
  initCounters();
  initGlowEffect();
  initSmoothScroll();
  initRippleButtons();
  initMobileDropdownTouch();
});

function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-anim]');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-anim-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver.observe(el));
}

function initParallax() {
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  if (!parallaxLayers.length) return;

  window.addEventListener('mousemove', function (e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    parallaxLayers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0.05;
      layer.style.transform = `translate(${x * speed * 30}px, ${y * speed * 30}px)`;
    });
  });
}

function initTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (!tiltCards.length) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -10;
      const rotateY = (x - centerX) / centerX * 10;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target'));
        const duration = parseInt(target.getAttribute('data-duration')) || 2000;
        const suffix = target.getAttribute('data-suffix') || '';
        const prefix = target.getAttribute('data-prefix') || '';
        let start = 0;
        const increment = targetValue / (duration / 16);

        function updateCounter() {
          start += increment;
          if (start < targetValue) {
            target.textContent = prefix + Math.floor(start) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = prefix + targetValue + suffix;
          }
        }

        updateCounter();
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function initGlowEffect() {
  const glowCards = document.querySelectorAll('.glow-card');
  if (!glowCards.length) return;

  glowCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.setProperty('--mouse-x', x + 'px');
      this.style.setProperty('--mouse-y', y + 'px');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initRippleButtons() {
  document.querySelectorAll('.ripple-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

function initMobileDropdownTouch() {
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const target = document.getElementById(this.getAttribute('data-target'));
      const arrow = this.querySelector('.dropdown-arrow');
      if (target) {
        target.classList.toggle('hidden');
        if (arrow) arrow.classList.toggle('rotate-180');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});

window.addEventListener('scroll', function () {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, [data-anim]');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
    if (isVisible && !el.classList.contains('active') && !el.classList.contains('animated')) {
      if (el.hasAttribute('data-anim')) {
        const delay = el.getAttribute('data-anim-delay') || 0;
        setTimeout(() => el.classList.add('animated'), parseInt(delay));
      } else {
        el.classList.add('active');
      }
    }
  });
});

function animateText(element, text, delay = 50) {
  if (!element) return;
  element.textContent = '';
  element.style.opacity = '1';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

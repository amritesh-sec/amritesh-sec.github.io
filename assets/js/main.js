// ============================================================
// AMRITESH-SEC — Main JavaScript
// ============================================================

// --- NAV SCROLL EFFECT ---
const nav = document.getElementById('siteNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// --- MOBILE NAV TOGGLE ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// --- COOKIE BANNER ---
function dismissCookie() {
  const banner = document.getElementById('cookieBanner');
  if (banner) {
    banner.classList.add('hidden');
    localStorage.setItem('cookieDismissed', '1');
  }
}
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('cookieDismissed')) {
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.style.display = 'none';
  }
});

// --- FORM TABS ---
function switchTab(tab) {
  document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.site-form').forEach(f => f.classList.add('hidden'));
  document.getElementById('form' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.remove('hidden');
  event.target.classList.add('active');
}

// --- COUNTER ANIMATION ---
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 20);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 60);
  });
}

// Trigger counter when hero is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(heroSection);
}

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll('.area-card, .article-card, .nv-feat');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 0.07) + 's';
        entry.target.style.animation = 'fadeUp 0.5s ease both';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));
}

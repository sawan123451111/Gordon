(function () {
  'use strict';

  var nav = document.getElementById('siteNav');
  var hero = document.querySelector('.hero');

  /* ---------- Sticky / solid nav on scroll ---------- */
  function onScroll() {
    var scrolled = window.scrollY > 60;
    nav.classList.toggle('is-scrolled', scrolled);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Hero parallax ---------- */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  var ticking = false;

  function updateParallax() {
    if (!hero) return;
    var rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      ticking = false;
      return;
    }
    var offset = rect.top * -1;
    parallaxEls.forEach(function (el) {
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
      el.style.transform = 'translate3d(0,' + (offset * speed * 0.3) + 'px,0)';
    });
    ticking = false;
  }

  document.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
  updateParallax();

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---------- Newsletter form (front-end only) ---------- */
  var newsletterForm = document.getElementById('newsletterForm');
  var newsletterNote = document.getElementById('newsletterNote');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      newsletterNote.textContent = 'Welcome to the ritual — check your inbox.';
      newsletterForm.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();

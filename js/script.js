// Vesper landing page interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Header background on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach((el) => io.observe(el));

// Add-to-bag micro interaction
document.querySelectorAll('.product-card .btn-line').forEach((btn) => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Added ✓';
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.textContent = String(Number(cartCount.textContent) + 1);
    setTimeout(() => { btn.textContent = original; }, 1600);
  });
});

// Newsletter form
const form = document.getElementById('newsletterForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = 'Thank you — check your inbox for your welcome offer.';
  form.reset();
});

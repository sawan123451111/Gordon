// NovaVisuals - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            if (!firstName || !lastName || !email || !service || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission (replace with actual backend integration)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate API call delay
            setTimeout(function() {
                // Hide form and show success message
                contactForm.style.display = 'none';
                if (formSuccess) {
                    formSuccess.style.display = 'block';
                }

                // Log form data (for demonstration)
                console.log('Form submitted:', {
                    firstName,
                    lastName,
                    email,
                    phone: document.getElementById('phone').value,
                    company: document.getElementById('company').value,
                    website: document.getElementById('website').value,
                    service,
                    budget: document.getElementById('budget').value,
                    message,
                    referral: document.getElementById('referral').value
                });
            }, 1500);
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service cards and other elements
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .pricing-card, .process-card, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
        }
    `;
    document.head.appendChild(style);

    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const hasPlus = text.includes('+');
                const hasX = text.includes('x');
                const hasM = text.includes('M');

                let endValue;
                if (hasM) {
                    endValue = parseInt(text.replace(/[^0-9]/g, ''));
                } else if (hasX) {
                    endValue = parseInt(text.replace(/[^0-9]/g, ''));
                } else {
                    endValue = parseInt(text.replace(/[^0-9]/g, ''));
                }

                if (!isNaN(endValue)) {
                    animateCounter(target, endValue, hasPlus, hasX, hasM);
                }
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    function animateCounter(element, end, hasPlus, hasX, hasM) {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * end);

            let display = current.toString();
            if (hasM) display += 'M';
            if (hasPlus) display += '+';
            if (hasX) display += 'x';

            element.textContent = display;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Add active state to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a:not(.nav-cta)');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

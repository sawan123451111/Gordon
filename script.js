/**
 * LY Visuals - Futuristic Video Ad Agency
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initCounterAnimation();
    initTestimonialSlider();
    initScrollAnimations();
    initContactForm();
    initGlitchEffect();
    initCursorGlow();
    initTypingEffect();
});

/**
 * Navbar scroll behavior
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Animated counter for statistics with futuristic scramble effect
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(target * easeOutQuart);

            // Add scramble effect during animation
            if (progress < 1) {
                const scrambleChance = Math.random();
                if (scrambleChance > 0.7) {
                    counter.textContent = Math.floor(Math.random() * target);
                } else {
                    counter.textContent = currentCount;
                }
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        requestAnimationFrame(updateCount);
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/**
 * Testimonial slider
 */
function initTestimonialSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    let autoPlayInterval;

    const showSlide = (index) => {
        cards.forEach((card, i) => {
            card.classList.remove('active');
            dots[i]?.classList.remove('active');
        });

        cards[index]?.classList.add('active');
        dots[index]?.classList.add('active');
        currentIndex = index;
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % cards.length;
        showSlide(nextIndex);
    };

    // Click handlers for navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });

    // Auto-play
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // Start auto-play
    startAutoPlay();

    // Pause on hover
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        slider.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.service-card, .work-item, .process-step, .about-content, .about-visual, .contact-info, .contact-form-wrapper, .feature'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add stagger effect for grid items
    const grids = document.querySelectorAll('.services-grid, .work-grid, .process-timeline');
    grids.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
}

// Add CSS class for animated elements
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .glitch {
        position: relative;
    }

    .glitch::before,
    .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .glitch::before {
        left: 2px;
        text-shadow: -2px 0 #ff00ff;
        clip: rect(24px, 550px, 90px, 0);
        animation: glitch-anim-2 3s infinite linear alternate-reverse;
    }

    .glitch::after {
        left: -2px;
        text-shadow: -2px 0 #00f0ff;
        clip: rect(85px, 550px, 140px, 0);
        animation: glitch-anim 2.5s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim {
        0% { clip: rect(30px, 9999px, 10px, 0); }
        5% { clip: rect(54px, 9999px, 98px, 0); }
        10% { clip: rect(23px, 9999px, 71px, 0); }
        15% { clip: rect(12px, 9999px, 87px, 0); }
        20% { clip: rect(89px, 9999px, 32px, 0); }
        25% { clip: rect(43px, 9999px, 19px, 0); }
        30% { clip: rect(76px, 9999px, 54px, 0); }
        35% { clip: rect(8px, 9999px, 67px, 0); }
        40% { clip: rect(92px, 9999px, 43px, 0); }
        45% { clip: rect(21px, 9999px, 78px, 0); }
        50% { clip: rect(56px, 9999px, 11px, 0); }
        55% { clip: rect(34px, 9999px, 96px, 0); }
        60% { clip: rect(67px, 9999px, 28px, 0); }
        65% { clip: rect(15px, 9999px, 82px, 0); }
        70% { clip: rect(88px, 9999px, 47px, 0); }
        75% { clip: rect(39px, 9999px, 64px, 0); }
        80% { clip: rect(72px, 9999px, 15px, 0); }
        85% { clip: rect(48px, 9999px, 91px, 0); }
        90% { clip: rect(19px, 9999px, 58px, 0); }
        95% { clip: rect(83px, 9999px, 36px, 0); }
        100% { clip: rect(61px, 9999px, 73px, 0); }
    }

    @keyframes glitch-anim-2 {
        0% { clip: rect(65px, 9999px, 100px, 0); }
        5% { clip: rect(17px, 9999px, 73px, 0); }
        10% { clip: rect(89px, 9999px, 38px, 0); }
        15% { clip: rect(42px, 9999px, 92px, 0); }
        20% { clip: rect(28px, 9999px, 56px, 0); }
        25% { clip: rect(74px, 9999px, 21px, 0); }
        30% { clip: rect(13px, 9999px, 84px, 0); }
        35% { clip: rect(96px, 9999px, 47px, 0); }
        40% { clip: rect(31px, 9999px, 69px, 0); }
        45% { clip: rect(58px, 9999px, 14px, 0); }
        50% { clip: rect(85px, 9999px, 52px, 0); }
        55% { clip: rect(22px, 9999px, 97px, 0); }
        60% { clip: rect(49px, 9999px, 33px, 0); }
        65% { clip: rect(76px, 9999px, 68px, 0); }
        70% { clip: rect(11px, 9999px, 89px, 0); }
        75% { clip: rect(63px, 9999px, 25px, 0); }
        80% { clip: rect(37px, 9999px, 81px, 0); }
        85% { clip: rect(94px, 9999px, 44px, 0); }
        90% { clip: rect(26px, 9999px, 72px, 0); }
        95% { clip: rect(51px, 9999px, 16px, 0); }
        100% { clip: rect(78px, 9999px, 59px, 0); }
    }

    .cursor-glow {
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        pointer-events: none;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        z-index: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (!data.name || !data.email || !data.service || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span style="color: var(--primary);">TRANSMITTING...</span>';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showNotification('TRANSMISSION COMPLETE. We\'ll get back to you soon.', 'success');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            if (email) {
                showNotification('SUBSCRIBED SUCCESSFULLY. Welcome to the network.', 'success');
                this.reset();
            }
        });
    }
}

/**
 * Show notification message with futuristic styling
 */
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-icon">${type === 'success' ? '&#10003;' : '&#10007;'}</div>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '16px 24px',
        background: 'rgba(10, 10, 15, 0.95)',
        border: `1px solid ${type === 'success' ? '#00f0ff' : '#ff3366'}`,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: type === 'success'
            ? '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)'
            : '0 0 20px rgba(255, 51, 102, 0.3)',
        zIndex: '9999',
        animation: 'slideIn 0.3s ease',
        maxWidth: '400px',
        backdropFilter: 'blur(10px)',
        fontFamily: 'var(--font-primary)',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    });

    // Style notification icon
    const icon = notification.querySelector('.notification-icon');
    Object.assign(icon.style, {
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${type === 'success' ? '#00f0ff' : '#ff3366'}`,
        color: type === 'success' ? '#00f0ff' : '#ff3366',
        fontSize: '12px'
    });

    // Add animation keyframes
    const keyframes = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;

    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);
    }

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: 'var(--text-muted)',
        fontSize: '1.25rem',
        cursor: 'pointer',
        padding: '0',
        lineHeight: '1',
        marginLeft: '8px'
    });

    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Glitch effect for hero title
 */
function initGlitchEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Add data attribute for glitch effect
        const highlight = heroTitle.querySelector('.highlight');
        if (highlight) {
            highlight.setAttribute('data-text', highlight.textContent);

            // Random glitch trigger
            setInterval(() => {
                if (Math.random() > 0.95) {
                    highlight.classList.add('glitch');
                    setTimeout(() => {
                        highlight.classList.remove('glitch');
                    }, 200);
                }
            }, 100);
        }
    }
}

/**
 * Cursor glow effect
 */
function initCursorGlow() {
    // Only on desktop
    if (window.innerWidth < 768) return;

    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth follow animation
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    // Hide when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '1';
    });
}

/**
 * Typing effect for hero subtitle
 */
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';

    let index = 0;
    const typingSpeed = 20;

    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    // Start typing after a delay
    setTimeout(type, 1000);
}

/**
 * Parallax effect for hero section
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const videoGrid = document.querySelector('.video-grid');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }

    if (videoGrid && scrolled < window.innerHeight) {
        videoGrid.style.transform = `rotateX(60deg) scale(2) translateY(${scrolled * 0.1}px)`;
    }
});

/**
 * Add hover effect sound simulation (visual feedback)
 */
document.querySelectorAll('.btn, .service-card, .work-item, .nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'all 0.1s ease';
    });
});

/**
 * Initialize random flicker for video cells
 */
const videoCells = document.querySelectorAll('.video-cell');
videoCells.forEach((cell, index) => {
    setInterval(() => {
        if (Math.random() > 0.98) {
            cell.style.opacity = '0.8';
            setTimeout(() => {
                cell.style.opacity = '';
            }, 100);
        }
    }, 100 + (index * 50));
});

/**
 * Add loading state
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add entrance animation to hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .hero-stats');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';

        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
});

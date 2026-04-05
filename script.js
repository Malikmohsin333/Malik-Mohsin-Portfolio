// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover effect on clickable elements
const hoverElements = document.querySelectorAll('a, button, .service-card, .project-card, .stat-card');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = '#FFD700';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#FFD700';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.service-card, .project-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.6s';
    observer.observe(el);
});

// Form submission
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thank you for reaching out! I will get back to you within 24 hours.');
        form.reset();
    });
}

// Hamburger menu (mobile)
// Hamburger menu for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const hireBtn = document.querySelector('.hire-btn');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        
        // Toggle nav links
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            if(hireBtn) hireBtn.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#000';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '15px';
            navLinks.style.borderBottom = '1px solid rgba(255,215,0,0.2)';
            
            if(hireBtn) {
                hireBtn.style.display = 'block';
                hireBtn.style.position = 'absolute';
                hireBtn.style.top = '70px';
                hireBtn.style.right = '20px';
            }
        }
    });
}
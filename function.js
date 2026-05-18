// Theme Toggle Functionality
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const button = document.querySelector('.theme-toggle');
    if (button) {
        button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Navigation Active State
function setActive(link) {
    // Remove active class from all nav links
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');
}

// Smooth Scroll for anchor links (if needed)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const themeButton = document.querySelector('.theme-toggle');
        if (themeButton) {
            themeButton.textContent = '☀️';
        }
    }

    // Set active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`nav a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});

// Mobile menu toggle (if you add hamburger menu later)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-open');
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const skillLevel = item.dataset.skill;
        
        if (rect.top < window.innerHeight * 0.8) {
            const progressBar = item.querySelector('.skill-progress');
            progressBar.style.width = skillLevel + '%';
            item.classList.add('animate');
        }
    });
}

// Run animation on scroll
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
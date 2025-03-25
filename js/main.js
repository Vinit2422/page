/**
 * Main JavaScript file for CG Artist Portfolio
 */

// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
function toggleMenu() {
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a link
function closeMenu() {
    navLinks.classList.remove('active');
}

// Featured items background image preload
function preloadImages() {
    if (document.querySelector('.featured-item')) {
        const featuredItems = document.querySelectorAll('.featured-item');
        featuredItems.forEach(item => {
            const bgImg = getComputedStyle(item).backgroundImage;
            if (bgImg !== 'none') {
                const img = new Image();
                img.src = bgImg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            }
        });
    }
}

// Event Listeners
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// If nav links exist, add click event to each link
if (navLinks) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Preload background images
    preloadImages();
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

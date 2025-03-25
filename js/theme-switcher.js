/**
 * Theme Switcher for CG Artist Portfolio
 * Toggles between light and dark themes and saves preference to localStorage
 */

// DOM Elements
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check if user has a saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        enableDarkTheme();
    } else {
        enableLightTheme();
    }
}

// Enable dark theme
function enableDarkTheme() {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
}

// Enable light theme
function enableLightTheme() {
    body.classList.remove('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
}

// Toggle between dark and light theme
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
}

// Check for system preference if no saved preference exists
function checkSystemPreference() {
    if (!localStorage.getItem('theme')) {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            enableDarkTheme();
        }
    }
}

// Event Listeners
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    checkSystemPreference();
    loadThemePreference();
});

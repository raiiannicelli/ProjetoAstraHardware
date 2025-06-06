// Hamburger menu functionality for all pages
window.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const menuLeft = document.getElementById('menu-left');
    const menuRight = document.getElementById('menu-right');
    if (hamburger && menuLeft && menuRight) {
        hamburger.addEventListener('click', function() {
            menuLeft.classList.toggle('active');
            menuRight.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }
});
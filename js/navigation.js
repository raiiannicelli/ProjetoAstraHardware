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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Fechar menu ao clicar em um item
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Fechar menu ao redimensionar a janela
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});
// Executes JS code after HTML page
document.addEventListener("DOMContentLoaded", function() {
    /* MOBILE HAMBURGER MENU */
    const hamburgerMenu = document.querySelector('.bottom-nav-container-mobile');
    const hamburgerMenuBars = document.querySelector('.hamburger-menu-bars');
    const pageContent = document.querySelector('body > *:not(nav.mobile-nav)'); // all content except nav

    const ToggleHamburgerMenu = () => {
        if (hamburgerMenu.style.display === 'none') {
            // makes the hamburger menu visible (hidden by default)
            hamburgerMenu.style.display = 'flex'; 
            pageContent.style.filter = 'blur(2px)';
        } else {
            hamburgerMenu.style.display = 'none'; 
            pageContent.style.filter = 'none';
        }
    }
    hamburgerMenuBars.addEventListener('click', ToggleHamburgerMenu); 

    // Close the hamburger menu when the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.mobile-nav')) {
        hamburgerMenu.style.display = 'none';
        }
    });
});


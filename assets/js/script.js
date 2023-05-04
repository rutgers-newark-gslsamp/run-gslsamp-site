/* MOBILE HAMBURGER MENU */
const hamburgerMenu = document.querySelector('..bottom-nav-container-mobile');
const hamburgerMenuBars = document.querySelector('#hamburger-menu-bars');

const toggleHamburgerMenu = () => {
    if (hamburgerMenu.style.display === 'none') {
        hamburgerMenu.style.display = 'flex';
        // makes the hamburger menu visible (hidden by default)
    } else {
        hamburgerMenu.style.display = 'none';
    }
}
hamburgerMenuBars.addEventListener('click', toggleHamburgerMenu); 

// Close the hamburger menu when the user clicks outside of it
document.addEventListener('click', (event) => {
    if (!event.target.closest('.mobile-nav')) {
      hamburgerMenu.style.display = 'none';
    }
  });
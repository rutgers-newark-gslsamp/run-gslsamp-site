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


    /* COPY TO CLIPBOARD */
    function copyToClipboard() {
        var copyText =  document.getElementById('a1').innerHTML;
    
       document.addEventListener('copy', function(e) {
          e.clipboardData.setData('text/plain', copyText);
          e.preventDefault();
       }, true);
    
       document.execCommand('copy');  
       console.log('copied text : ', copyText);
       alert('copied text: ' + copyText); 
    }
});


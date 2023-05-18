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
    function CopyToClipboard() {
        let copyText = document.querySelector('.alliance-university-contact-email').innerHTML;
    
        document.addEventListener('copy', function(event) {
            // Set the copied text to the clipboard data
            event.clipboardData.setData('text/plain', copyText);
            // Prevent the default copy behavior to avoid refreshing
            event.preventDefault();
        });
      
        // Write the text to the clipboard
        navigator.clipboard.writeText(copyText)
            .then(function() {
                console.log('Copied to clipboard:', copyText);
                alert('Copied email to clipboard');
            })
            .catch(function(error) {
                console.error('Failed to copy to clipboard:', error);
                alert('Failed to copy email to clipboard');
            });
      };

      const allianceCard = document.querySelector('.alliance-card');
      allianceCard.addEventListener('click', copyToClipboard);
});


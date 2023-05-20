// Executes JS code after HTML page
document.addEventListener("DOMContentLoaded", function() {
    // /* MOBILE HAMBURGER MENU */
    // const hamburgerMenu = document.querySelector('.bottom-nav-container-mobile');
    // const hamburgerMenuBars = document.querySelector('.hamburger-menu-bars');
    // const pageContent = document.querySelector('body > *:not(nav.mobile-nav)'); // all content except nav

    // const ToggleHamburgerMenu = () => {
    //     if (hamburgerMenu.style.display === 'none') {
    //         // makes the hamburger menu visible (hidden by default)
    //         hamburgerMenu.style.display = 'flex'; 
    //         pageContent.style.filter = 'blur(2px)';
    //     } else {
    //         hamburgerMenu.style.display = 'none'; 
    //         pageContent.style.filter = 'none';
    //     }
    // }
    // hamburgerMenuBars.addEventListener('click', ToggleHamburgerMenu); 

    // // Close the hamburger menu when the user clicks outside of it
    // document.addEventListener('click', (event) => {
    //     if (!event.target.closest('.mobile-nav')) {
    //     hamburgerMenu.style.display = 'none';
    //     }
    // });

    
    /* COPY TO CLIPBOARD */
    const allianceCards = document.querySelectorAll('.alliance-card');
    
    const copyToClipboard = (event) => {
        let copyText = event.currentTarget.querySelector('.alliance-university-contact-email').innerHTML;

        event.preventDefault();

        // Write the text to the clipboard
        navigator.clipboard.writeText(copyText)
            .then(() => {
                console.log('Copied to clipboard:', copyText);
                event.currentTarget.style.cursor = 'copy'; // Change cursor style to 'copy' for success
             
            })
            // Performed if there are any issues with copying the email
            .catch((error) => {
                console.error('Failed to copy to clipboard:', error);
                event.currentTarget.style.cursor = 'not-allowed'; // Change cursor style to 'not-allowed' for failure
                setTimeout(() => {
                    event.currentTarget.style.cursor = 'default'; // Revert cursor style back to default after a brief delay
                }, 1000);
            });
    };

    allianceCards.forEach((card) => {
        card.addEventListener('click', copyToClipboard);
    });

});


const navSearchBar = document.querySelector('.top-nav-search');
const searchMediaQuery = window.matchMedia('(max-width: 66.67%)');

function handleMediaQuery(searchMediaQuery) {
    if (searchMediaQuery.matches) {
        navSearchBar.classList.add('top-nav-search-centered');
    } else {
        navSearchBar.classList.remove('top-nav-search-centered');
    }
}

handleMediaQuery(searchMediaQuery); // Handle the media query on page load
searchMediaQuery.addListener(handleMediaQuery); // Handle the media query on window resize

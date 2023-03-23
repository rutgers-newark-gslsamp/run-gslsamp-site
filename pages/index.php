<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GS-LSAMP | Rutgers–Newark</title>
    <link rel="stylesheet" href="../assets/stylesheets/styles.css"/>
    <link rel="stylesheet" href="../assets/stylesheets/home.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">
    <link rel="icon" href="../assets/images/rutgers-logos/ru-n_logo.png">
</head>
<body>
    <nav>
        <div class="top-nav-container">
            <div class="top-nav-header">
                <img class="nav-logo" src="../assets/images/rutgers-logos/Rutgers_University_Newark_logo.png" alt="Rutgers Univesity–Newark Logo">
                <h1 class="nav-header-title">Louis Stokes Alliance for Minority Participation (LSAMP)</h1>  
            </div>
            <div class="top-nav-search">
                <input class="search" type="text" placeholder="Search RU-N GS-LSAMP">
            </div>
        </div>
        <div class="bottom-nav-container">
            <ul class="page-nav-list">
                <li><a class="nav-page-link" href="index.html">Home</a></li>
                <li><a class="nav-page-link" href="about.html">About Us</a></li>
                <li><a class="nav-page-link" href="membership.html">Membership</a></li>
                <li><a class="nav-page-link" href="events.html">Events & Opportunities</a></li>
                <li><a class="nav-page-link" href="<?php include 'contact.php';?>">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <main class="landing-hero">
        <!-- Later turn into hero-gallery -->
        <div class="hero-picture">
            <img src="http://via.placeholder.com/1280x500" alt="Placeholder image">
        </div>
        <div class="hero-cta-block">
            <div class="cta-headline">
                <h2 id="landing-cta-headline">Increasing the retention, graduation and success of underrepresented minorities STEM.</h2>
            </div>
            <div class="cta-button-wrapper">
                <button class="cta-button" id="cta-learn-more-button">
                    <a class="cta-learn-more-anchor" href="about.html">Learn More</a>
                </button>
                <button class="cta-button" id="cta-join-now-button">
                    <a class="cta-join-now-anchor"href="membership.html">Join Now</a>
                </button>
            </div>
        </div>  
    </main>
    
    <section class="landing-about-container">
        <!-- I think the names of these divs could be improved for clarity-->
        <img class="landing-about-logo" src="../assets/images/rutgers-logos/ru-n_logo.png" alt="Rutgers–Newark GS-LSAMP Logo">  
        
        <div class="landing-about-card">
            <div class="landing-about-body">
                <h2 class="landing-about-title">What is GS-LSAMP?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="landing-about-button">
                    <a class="landing-about-anchor" href="about.html" alt="Learn more about GS-LSAMP in our About Us Page">Learn More</a>
                </button>
            </div>
        </div>
    </section>
    
    <section class="landing-video">
        <video width="75%" height="600px" controls alt="Video of Rutgers University–Newark GS-LSAMP conference.">
            <source src="http://newark.gslsamp.rutgers.edu/media/videos/research_conference.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video> 
    </section>
    
    <section class="alliance-section">
        <div class="section-header">
            <h2 class="lsamp-alliance-header">GS-LSAMP Alliance</h2>
            <hr class="section-horizontal-line">
        </div>
        <div class="alliance-card-container">
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/rutgers-logos/RUN.png" alt="Rutgers University–Newark Logo">
                <div class="alliance-university-content" id="alliance-rutgers-newark">
                    <h3 class="alliance-university-name">Rutgers University – Newark</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Oren Rabinovich <br>
                            oren.rabinovich@rutgers.edu <br>
                            (973) 353-3562
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/alliance-logos/Fairleigh_Dickinson_University_Seal.png" alt="Fairleigh Dickinson University Logo">
                <div class="alliance-university-content" id="alliance-fairleigh-dickinson">
                    <h3 class="alliance-university-name">Fairleigh Dickinson University</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Dr. Marion McClary <br>
                            mcclary@fdu.edu <br>
                            (201) 692-2606
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/alliance-logos/montclair_state_university_seal.png" alt="Montclair State University Logo">
    
                <div class="alliance-university-content" id="alliance-montclair">
                    <h3 class="alliance-university-name">Montclair State University</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Dr. Yvonne Gindt <br>
                            gindty@montclair.edu <br>
                            (973) 655-3469
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/alliance-logos/william_paterson_university.png" alt="William Paterson University Logo">
                <div class="alliance-university-content" id="alliance-william-paterson">
                    <h3 class="alliance-university-name">William Paterson University</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Dr. Eliana Antoniou <br>
                            antonioue@wpunj.edu <br>
                            (973) 720-3715
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/alliance-logos/kean-university-logo-1.png" alt="Kean University Logo">
                <div class="alliance-university-content" id="alliance-kean">
                    <h3 class="alliance-university-name">Kean University</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Dr. Juyoung Ha <br>
                            haj@kean.edu <br>
                            (908) 737-3739
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/alliance-logos/essex-county-college-squarelogo.png" alt="Essex Count College Logo">
                <div class="alliance-university-content" id="alliance-essex-county-college">
                    <h3 class="alliance-university-name">Essex County College</h3>
                    <div class="alliance-university-contact">
                        <p>
                            gslsamp@essex.edu
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/alliance-logos/New_Jersey_IT_seal.png" alt="New Jersey Institute of Technology Logo">
                <div class="alliance-university-content" id="alliance-njit">
                    <h3 class="alliance-university-name">New Jersey 
                        Institute of Technology</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Dr. Crystal Smith <br>
                            smithcs@njit.edu <br>
                            (973) 596-3690
                        </p>
                    </div>
                </div>
            </div>
            <div class="alliance-card">
                <img class="alliance-university-logo" src="../assets/images/rutgers-logos/Rutgers_University_seal.png" alt="Rutgers University Seal">
                <div class="alliance-university-content" id="alliance-rutgers-new-brunswick">
                    <h3 class="alliance-university-name">Rutgers University - 
                        New Brunswick</h3>
                    <div class="alliance-university-contact">
                        <p>
                            Dr. Beverely Gaines <br>
                            bag104@echo.rutgers.edu <br>
                            (848) 932-2559
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    <footer>
            <p class="footer-copyright-text">Copyright ©2023, Rutgers, The State University of New Jersey</p>
    </footer>

</body>
</html>
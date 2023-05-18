
<?php
    //form variables
    $first_name="";
    $last_name="";
    $email="";
    $inquiry="";
    $message="";
    $form_status="";

    //check if form submitted and store variables
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $first_name= ucwords($_POST["first_name"]);
        $last_name= ucwords($_POST["last_name"]);
        $email= $_POST["email"];
        $inquiry= ucwords($_POST["inquiry"]);
        $message= $_POST["message"];

        //composing email elements

        //Fullname
        $sender_name = $first_name . " " . $last_name;

        //custom email subject
        $email_subject = $inquiry . ": " . $sender_name;


        //$to = "oren.rabinovich@rutgers.edu";
        $to = "christinobarbosa09@gmail.com";


        require 'phpmailer.php';
    }
?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | RU-N GS-LSAMP</title>
    <link rel="stylesheet" href="../assets/stylesheets/styles.css"/>
    <link rel="stylesheet" href="../assets/stylesheets/form-submitted.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">
    <link rel="icon" href="../assets/images/rutgers-logos/ru-n_logo.png">
</head>

<!--Nav Bar-->
<body>
    <nav>
        <div class="top-nav-container">
            <div class="top-nav-header">
                <img class="nav-logo" src="../assets/images/rutgers-logos/Rutgers_University_Newark_logo.png" alt="Rutgers Univesity–Newark Logo">
                <hr class="nav-vertical-line">
                <h1 class="nav-header-title">Louis Stokes Alliance for Minority Participation (LSAMP)</h1>  
            </div>
            <div class="top-nav-search">
                <input class="search" type="text" placeholder="Search RU-N GS-LSAMP">
            </div>
        </div>
        <div class="bottom-nav-container">
            <ul class="nav-page-list">
                <li><a class="nav-page-link" href="index.html">Home</a></li>
                <li><a class="nav-page-link" href="about.html">About Us</a></li>
                <li><a class="nav-page-link" href="membership.html">Membership</a></li>
                <li><a class="nav-page-link" href="events.html">Events & Opportunities</a></li>
                <li><a class="nav-page-link" href="contact.php">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <!--Thank user for submission-->
    <header>
        <h1>Thank you for your submission, we'll get back to you soon!</h1>
    </header>


    <div id="faq-link">
        <a id="faq" href="faq.html" target="_blank">Frequently Asked Questions</a>
    </div>

    <footer>
        <p>Copyright ©2023, Rutgers, The State University of New Jersey</p>
    </footer>
</body>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | RU-N GS-LSAMP</title>
    <link rel="stylesheet" href="../assets/stylesheets/styles.css"/>
    <link rel="stylesheet" href="../assets/stylesheets/contact.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">
    <link rel="icon" href="../assets/images/rutgers-logos/ru-n_logo.png">
</head>

<!--Nav Bar-->
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
                <li><a class="nav-page-link" href="contact.html">Contact Us</a></li>
            </ul>
        </div>
    </nav>
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
        $first_name= $_POST["first_name"];
        $last_name= $_POST["last_name"];
        $email= $_POST["email"];
        $inquiry= $_POST["inquiry"];
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

    <main>
        <!--Page Header-->
        <header>
            Contact Us!
        </header>

        <!--Form-->
        <form action="contact.php" method="POST">
            <div class="form-line">
                <label for="first_name">First Name*</label>
                    <input required type="text" id="first_name" name="first_name" pattern="^[a-zA-Z]+$" oninvalid="setCustomValidity('Alphabetic characters only')" value="<?= $first_name;?>">
                
                <label for="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" pattern="^[a-zA-Z]+$" oninvalid="setCustomValidity('Alphabetic characters only')" value="<?= $last_name;?>">
            </div>

            <br>
            <div class="form-line">
                <label for="email">Email*</label>
                    <input required type="text" id="email" name="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" oninvalid="setCustomValidity('Invalid email format')" title="username@email.com" value="<?= $email;?>">

                <label for="inquiry">Inquiry*</label>
                    <select required name="inquiry" value="<?= $inquiry;?>">
                        <option selected><?= ucwords($inquiry);?></option>
                        <option value="general question">General Question</option>
                        <option value="looking for opportunities">Looking for Opportunities</option>
                        <option value="faculty looking to assist">Faculty Looking to Assist</option>
                    </select>
            </div>

            <br>
            <label for="message">Message*</label>
                <textarea required id="message" name="message" rows="5" cols="30" minlength="15" maxlength="250"><?= $message;?></textarea>
            <br>
            <input type="submit" value="Submit">
            <?= $form_status?>
        </form>
        
    </main>

    <div id="faq-link">
        <a id="faq" href="frequently-asked-questions.html" target="_blank">Frequently Asked Questions</a>
    </div>

    <footer>
        <p>Copyright ©2023, Rutgers, The State University of New Jersey</p>
    </footer>

</body>
</html>
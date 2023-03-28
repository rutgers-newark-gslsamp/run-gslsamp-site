<?php

ini_set("include_path","c:/PHPMailer-master/");
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'christinobarbosa09@gmail.com';                     //SMTP username
    $mail->Password   = 'cjeerfifzxabehee';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
    //Recipients
    $mail->setFrom($email, $sender_name);
    $mail->addAddress($to, $sender_name);     //Add a recipient
        
    //Content
    $mail->isHTML(true);                                 
    $mail->Subject = $email_subject;
    $mail->Body    = $message; //html format mail
    $mail->AltBody = $message; //non-html format mail
        
    $mail->send();
    $form_status="<p style=''>Thank you for your submission, we'll get back to you soon!</p>";
} catch (Exception $e) {
    $form_status = "<p style='color:red; font-weight: bold;'>**Message could not be sent. Mailer Error: {$mail->ErrorInfo}**</p>";
}

        

?>
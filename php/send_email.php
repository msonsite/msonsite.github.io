<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['cf-name'];
    $email = $_POST['cf-email'];
    $message = $_POST['cf-message'];

    $to = "sanderdelobel@outlook.com"; // Replace with your email address
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>

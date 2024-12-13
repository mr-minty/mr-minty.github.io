<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate input
    $fname = htmlspecialchars($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    $logFile = fopen('contactlog.txt','a') or die;
    // Perform your processing (e.g., save to database, send email, etc.)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Example success message
        $data= "fname: " . $fname .
         "\nlname: " . $lname .
         "\nEmail: " . $email .
         "\nMessage: " . $message;
         echo $data;
         fwrite($logFile, $data . "\n\n");
         fclose($logFile);
    } 
    else {
        echo "Invalid email address. Please try again.";
    }
} 
else {
    echo "Invalid request.";
}
?>

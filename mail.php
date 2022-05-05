<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$object= $_POST['object'];
$message= $_POST['message'];
$to = "naeefhjee@gmail.com";
$subject = "Mail From Hadeer website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Object =" . $object . "\r\n Message =" . $message;
$headers = "From: noreply@https://muhammed-haci.github.io/hadeer" . "\r\n" .
"CC: somebodyelse@hadeer.github.io";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thanks.html");
?>


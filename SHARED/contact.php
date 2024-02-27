<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="../SERVER/server.css">

</head>
<style>
body{
    font-size: 25px;
}
input{
    border: none;
    background-color: #79747f;
}


.textMessage{
 resize: none;
  width: 50vw; 
  height: 30vw; 
  border: none;
 background-color: #79747f;

}

#loginForm, .response{
    margin: 2% 5% 2% 5%;
}


.password, .username  {
    padding: 1% 10% 1% 10%;
}

</style>
<body>
<script>
        $(document).ready( function() {
            $("#header").load("header.php");
            $("#footer").load("footer.html");
        });
    </script>
    <div id="header"></div>
    <div id="loginForm">
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
        <label for="name" >VAŠE IME:</label><br>
        <input type="text" id="name" name="name" required class="username">
            <br>
        <label for="subject">ZADEVA:</label ><br>
        <input type="text" id="subject" name="subject" required class="username">
            <br>
        <label for="email">VAŠ EMAIL:</label><br>
        <input type="email" id="email" name="email" required class="username">
            <br>
        <label for="message">VAŠE SPOROČILO:</label><br>
        <textarea  id="message" name="message" required class="textMessage"></textarea>
            <br>
        <div  class="submitAbove">    
            <button type="submit" class="submitData">Send</button>
        </div >

    </div>   
    </form>


    <div id="footer"></div>

</body>
</html>


<?php
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];

        if (empty($_POST['name'])  ) {
            echo "Field name, cant be empty";
        }
        elseif(empty($_POST['email'])){
            echo "Field email cant be empty";
        }
        elseif(empty($_POST['message'])){
            echo "Field message cant be empty";
        }
        elseif(empty($_POST['subject'])){
            echo "Field subject cant be empty";
        }
        else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo "Enter a valid email";
        }
        else {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];

            $recipient = "smoletilen@gmail.com";

            $headers = "From: $name <$email>";
    
            if (mail($recipient, $subject, $message, $headers)) {
                echo "Email sent successfully!";
            } 
            else {
                echo "Failed to send email. Problem with the server";
            }
        }
    }
        
?>



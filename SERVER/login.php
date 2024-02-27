<?php
    include("../SHARED/header.php");
    include("database.php");
    include("generalData.php");
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <link rel="stylesheet" href="server.css">
</head>
<body>
    <div id="loginForm">
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF'])?>" method="POST"> 
    <div class="username">        🧛‍♀️<input type="text" name="username" placeholder="zmejevski vzdevek" ><br>
    </div>
    <div class="password">
        &#128274;<input type="password" name="password" placeholder="geslo" ><br>
    </div>
    <div  class="submitAbove">
        <input type="submit" name="submit" value="PRIJAVA" class="submitData"><br>
    </div >
    <div class="textForm">
        <p>nisi še uporabnik? <a href="register.php">REGISTRIRAJ SE!</a></p>
    </div>
    </form>
    
</body>
</html>


<?php

    if($_SERVER["REQUEST_METHOD" ] == "POST"){
        $username = filter_input(INPUT_POST,"username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST,"password", FILTER_SANITIZE_SPECIAL_CHARS);

        $check_user_query = "SELECT * FROM users WHERE username='$username'";
        $check_user_result = mysqli_query($conn, $check_user_query);

        

        if ($check_user_result && mysqli_num_rows($check_user_result) > 0) {
            $user_data = mysqli_fetch_assoc($check_user_result);
            $hashed_password = $user_data['password'];

            if (password_verify($password, $hashed_password)) {
                if (session_status() == PHP_SESSION_NONE) {
                    session_start();
                }
                $_SESSION["username"] = $username;
                $getLastLevel = "SELECT lastLevel, dificulty, DATE, achievements  FROM users WHERE username='$username'";
                $getLastLevel_result = mysqli_query($conn, $getLastLevel);

                // Fetch a row from the result set as an associative array
                $row = mysqli_fetch_assoc($getLastLevel_result);
                // Access the column containing the integer value 
                $_SESSION["lastLevel"] = $row['lastLevel'];
                $_SESSION["dificulty"] = $row['dificulty'];
                $_SESSION["DATE"] = $row['DATE'];
                $_SESSION["achievements"] = $row['achievements'];

             
                echo "<p class='response''>Prijava uspešna, prenaslavlanje!<p>";
                echo "<meta http-equiv=Refresh content=2;url=../index.php>";


            } else {
                echo "Incorrect password";
            }
        } else {
            echo "User does not exist";
        }
        
   
        
    
    }
    mysqli_close($conn);
  
   
?>
</div>
<?php
include("../SHARED/footer.html");
?>
<?php
    include("../SHARED/header.php");
    include("database.php");
    

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
        <div class="username">        🧛‍♀️<input type="text" name="username" placeholder="zmejski vzdevek" ><br>
        </div>
        <div class="password">
            &#128274;<input type="password" name="password" placeholder="geslo" ><br>
        </div>
        <div class="password">
            &#128274;<input type="password" name="passwordRepeat" placeholder="ponovno vnešeno geslo" ><br>
        </div>
        <div  class="submitAbove">
            <input type="submit" name="submit" value="PRIJAVA" class="submitData"><br>
        </div >
        <div class="textForm">
            <p>že uporabnik? <a href="login.php">PRIJAVI SE!</a></p>
        </div>
        </form>
  

</body>
</html>




<?php

    if($_SERVER["REQUEST_METHOD" ] == "POST"){
        $username = filter_input(INPUT_POST,"username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST,"password", FILTER_SANITIZE_SPECIAL_CHARS);
        $passwordRepeat = filter_input(INPUT_POST,"passwordRepeat", FILTER_SANITIZE_SPECIAL_CHARS);

      

        if(empty($username) ){
            echo "<p class='response''>prosim vnesi uporabniško ime !<p>";
        }else if(empty($password)){
            echo "<p class='response''>prosim vnesi geslo!<p>";
        }else if($password !== $passwordRepeat){
            echo "<p class='response''>gesli se ne ujemata!<p>";
        }
        else{
            $check_query = "SELECT * FROM users WHERE username='$username'";
            $result = mysqli_query($conn, $check_query);
        if (mysqli_num_rows($result) > 0) {
            echo "<p class='response''>uporabniško ime že v uporabi 😫!<p>";
        } else {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hash') "; 
            mysqli_query($conn, $sql);
                if (session_status() === PHP_SESSION_NONE) 
                    session_start();
                $_SESSION["username"] = $username;
                $getLastLevel = "SELECT achievements  FROM users WHERE username='$username'";
                $getLastLevel_result = mysqli_query($conn, $getLastLevel);

                $row = mysqli_fetch_assoc($getLastLevel_result);
                $_SESSION["achievements"] = $row['achievements'];

             
                echo "<p class='response''>Registracija uspešna, prenaslavlanje!<p>";
                echo "<meta http-equiv=Refresh content=2;url=../index.php>";
         

        }

            
    }
    
    }

    mysqli_close($conn);
  
   
?> 
 </div>

 <?php
include("../SHARED/footer.html");
?>
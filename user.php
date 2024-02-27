<?php
      include("SERVER/database.php");

    session_start();
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="profileCSS.css">
</head>
<body>
    <script>
    $(document).ready(function() {
        $("#header").load("SHARED/header.php");
    $("#footer").load("SHARED/footer.html");});
    </script>
   <div id="header"></div>
    


    <?php 
        $username = $_SESSION['username'];
        if(isset($_GET['user'])){
            $username = $_GET['user'];
            
        } 
        echo "<h1>user " . $username . "</h1>";
        $sql = "SELECT achievements FROM users WHERE username='{$username}'";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            if (mysqli_num_rows($result) > 0) {
                $achievements = "";
                while ($row = mysqli_fetch_assoc($result)) {
                    $achievements .= $row["achievements"] . "<br>";
                }
                mysqli_close($conn);
                ?>
                <div class="achievementsDisplayProfile">
                  <h2>ZMENTURES</h2>
                <?php 
                    if ($achievements[2] === "1") {
                      echo '<div class="achievement-container">';
                      echo '<img src="assets/achivments/zmejelov_clasic/8665591_ghost_halloween_icon.png" alt="Achievement Picture 1">';
                      echo "<p class='hover-text'>UNLOCK SECRET LEVEL AND WIN IT</p>";
                      echo '</div>';
                  }
                    ?>
                <?php
                  if ($achievements[1] === "1") {
                    echo '<div class="achievement-container">';
                      echo '<img src="assets\achivments\zmejelov_clasic\9035903_skull_sharp_icon.png"  alt="Achievement Picture 1">';
                      echo "<p class='hover-text'>DIE 50 TIMES IN ONE GAME</p>";
                      echo '</div>';}
                 ?>
                <?php
                  if ($achievements[5] === "1") {
                      echo '<div class="achievement-container">';
                      echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png"  alt="Achievement Picture 1">';
                      echo "<p class='hover-text'>WIN PLAYING EASY DIFICULTY</p>";
                      echo '</div>';}
                  ?>
                <?php
                  if ($achievements[3] === "1") {
                    echo '<div class="achievement-container">';
                      echo '<img src="assets\achivments\zmejelov_clasic\8665817_store_shopping_icon.png"  alt="Achievement Picture 1">';
                      echo "<p class='hover-text'>HELP PEOPLE IN TOWN</p>";
                      echo '</div>';}

                  ?>
                <?php
                  if ($achievements[0] === "1") {
                    echo '<div class="achievement-container">';
                      echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
                      echo "<p class='hover-text'>EXPLORE ANCIENT RUINS</p>";
                      echo '</div>';}
                  ?>
              </div>    
               <div class="achievementsDisplayProfile">
                <h2 >SPEEDRUN </h2>
              <?php
              if ($achievements[6] === "1") {
                echo '<div class="achievement-container">';
                  echo '<img src="assets\achivments\speedRun\speed.png"  alt="Achievement Picture 1">';
                  echo "<p class='hover-text'>COMPLETE THE GAME IN LESS THEN A MINUTE</p>";
                  echo '</div>';}
              ?>
          <?php
            if ($achievements[7] === "1") {
              echo '<div class="achievement-container">';
                echo '<img src="assets\achivments\speedRun\complete.png"  alt="Achievement Picture 1">';
                echo "<p class='hover-text'>COMPLETE THE GAME</p>";
                echo '</div>';}
            ?>
          <?php
            if ($achievements[8] === "1") {
              echo '<div class="achievement-container">';
                echo '<img src="assets\achivments\speedRun\allDeaths.png"  alt="Achievement Picture 1">';
                echo "<p class='hover-text'>DIE BY EVERY IDENTITY AT LEAST ONCE IN A GAME</p>";
                echo '</div>';}
           ?>
          <?php
            if ($achievements[9] === "1") {
              echo '<div class="achievement-container">';
                echo '<img src="assets\achivments\speedRun\star.png"  alt="Achievement Picture 1">';
                echo "<p class='hover-text'>COLLECT ALL THE POSSIBLE STARS</p>";
                echo '</div>';}
           ?>
          <?php
            if ($achievements[10] === "1") {
              echo '<div class="achievement-container">';
              echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
                echo "<p class='hover-text'>DIE 20 TIMES IN ONE GAME</p>";
                echo '</div>';}
           ?>
          <?php
            if ($achievements[11] === "1") {
              echo '<div class="achievement-container">';
                echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
                echo "<p class='hover-text'>DIE BY A SPACESHIP</p>";
                echo '</div>';}
          ?>
          </DIV>
          <div class="achievementsDisplayProfile">
                <h2 >ZMEJELOV 1960 </h2>
              <?php
              if ($achievements[6] === "1") {
                echo '<div class="achievement-container">';
                echo '<img src="assets\achivments\old.png" alt="Achievement Picture 1">';
                echo "<p class='hover-text'>  DOKONČAJ IGRO</p>";
                  echo '</div>';}
              ?>
            </DIV>

            <?php
            } else {
                echo "Username doesn't exist";
            }
        } else {
            echo "Error: " . mysqli_error($conn);
        }
        
          
          ?>
     
      
       


 
      

 
      <div id="footer"></div>
</body>
</html>





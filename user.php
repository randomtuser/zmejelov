<?php
include("SERVER/database.php");

session_start();
?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>zmejelov</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="/zmejelov/CSS/index.css">
  <link rel="stylesheet" href="/zmejelov/CSS/profileCSS.css">
</head>

<body>
  <script>
    $(document).ready(function() {
      $("#header").load("SHARED/header.php");
      $("#footer").load("SHARED/footer.html");
    });
  </script>
  <div id="header"></div>



  <?php
  $username = $_SESSION['username'];

  if (isset($_GET['user'])) {
    $username = $_GET['user'];
  }
  echo "<h1>ZMEJELOVER: " . $username . "</h1>";
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
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[5] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>WIN PLAYING EASY DIFICULTY</p>";
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[3] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\8665817_store_shopping_icon.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>HELP PEOPLE IN TOWN</p>";
          echo '</div>';
        }

        ?>
        <?php
        if ($achievements[0] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>EXPLORE ANCIENT RUINS</p>";
          echo '</div>';
        }
        ?>
      </div>
      <div class="achievementsDisplayProfile">
        <h2>SPEEDRUN </h2>
        <?php
        if ($achievements[6] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\speed.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>COMPLETE THE GAME IN LESS THEN A MINUTE</p>";
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[7] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\complete.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>COMPLETE THE GAME</p>";
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[8] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\allDeaths.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>DIE BY EVERY IDENTITY AT LEAST ONCE IN A GAME</p>";
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[9] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\star.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>COLLECT ALL THE POSSIBLE STARS</p>";
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[10] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>DIE 20 TIMES IN ONE GAME</p>";
          echo '</div>';
        }
        ?>
        <?php
        if ($achievements[11] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
          echo "<p class='hover-text'>DIE BY A SPACESHIP</p>";
          echo '</div>';
        }
        ?>
      </DIV>
      <div class="achievementsDisplayProfile">
        <h2>zmejelov 1960 </h2>
        <?php
        if ($achievements[6] === "1") {
          echo '<div class="achievement-container">';
          echo '<img src="assets\achivments\old.png" alt="Achievement Picture 1">';
          echo "<p class='hover-text'>  DOKONČAJ IGRO</p>";
          echo '</div>';
        }
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

  <div class="QnA" class="col-10" id="QnA_OG">
    <h1>Q&N</h1>
    <div>
      <div class="QN_field">
        <div class="question_field">
          <p>Ali lahko spremenim svoje ime in geslo?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('a1s')">&#9660;</button></div>
      </div>
      <div id="a1s" style="display: none;">
        <p>Ne</p>
      </div>
    </div>


    <div>
      <div class="QN_field">
        <div class="question_field">
          <p class="question">Koliko časa je bilo posvečeno igri?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('u1s')">&#9660;</button></div>
      </div>
      <div id="u1s" style="display: none;">
        <p>Govorimo o več kot 200 urah</p>
      </div>
    </div>


    <div>
      <div class="QN_field">
        <div class="question_field">
          <p class="question">Ali je bilo po xx urah še vedno zabavno?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('u2s')">&#9660;</button></div>
      </div>
      <div id="u2s" style="display: none;">
        <p>Ddddddddd</p>
      </div>
    </div>

    <div>
      <div class="QN_field">
        <div class="question_field">
          <p class="question">Kako te lahko kontaktiram?</p>
        </div>
        <div class="button_field"><button class="dropbtn" onclick="toggleAnswerVisibility('u3s')">&#9660;</button></div>
      </div>
      <div id="u3s" style="display: none;">
        <p>PREKO OBRAZCA KI GA BOM PRIPORAL SEM</p>
      </div>
    </div>

  </div>



  <script>
    function toggleAnswerVisibility(id) {
      var myEle = document.getElementById(id);
      if (myEle.style.display === "none") {
        myEle.style.display = "inline";
        myEle.classList.add("answer-visible"); // Add the CSS class
      } else {
        myEle.style.display = "none";
        myEle.classList.remove("answer-visible"); // Remove the CSS class
      }
    }
  </script>






  <div id="footer"></div>
</body>

</html>
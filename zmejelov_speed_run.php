<?php
  include("SERVER/database.php");
  session_start();
  include ('translations/load_translations.php');

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TH6M7HMG59"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TH6M7HMG59');   
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="/zmejelov/CSS/index.css">


 <meta charset="utf-8"/>
     <title>Zmejelov</title>
    <script type="text/javascript" src = "Zmejelov_basic_game/phaser.min.js"></script>
    <script type="text/javascript"src = "zmejelov_speed_run/S0_shared.js"></script>
    <script type="text/javascript"src = "zmejelov_speed_run/S2_inicial.js"></script>
    <script type="text/javascript"src = "zmejelov_speed_run/S3_storyIntro.js"></script>
    <script type="text/javascript"src = "zmejelov_speed_run/S4_gamePlayStart.js"></script>
    <script type="text/javascript"src = "zmejelov_speed_run/S5_konec.js"></script>
    <script type="text/javascript"src = "zmejelov_speed_run/S4_deathScreen.js"></script>

    
    <script type="text/javascript"src = "zmejelov_speed_run/S1_game.js"></script>
    <link rel="preload" as="font" href="assets\uvod\Cinzel-Regular.ttf" type="font/ttf" />
  </head>
  <body>
    <div id="header"></div>

    <script>
      $(document).ready(function() {
        $("#header").load("SHARED/header.php");
      $("#footer").load("SHARED/footer.html");

      });
    </script>
  

  <h1>ZMENTURES</h1>
    <div  class="introduction" id="introduction_OG" >
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
      <div class="introductionText" >
        <p><b>ZMENTURES</b>    <?php  $translations = loadTranslations(); echo $translations['zmejelov_intro'] ?></p>
      </div>
    </div>

    <div id="time"> 
            <span class="digit" id="hr"> 
                00</span> 
            <span class="digit" id="min"> 
                00</span> 
            <span class="digit" id="sec"> 
                00</span> 
            <span class="digit" id="count"> 
                00</span> 
        </div> 

    <div id="gameContainerSpeedRunning"></div>

  <div id=speed_running_split>
      <div class="QnA_split" class="col-10" id="QnA_OG">
        <h1 >Q&N</h1>
        <p class="question">Kako shranim napredek igre?</p>
        <p class="answer">Napredek igre se shrani avtomatsko na vsakem nivoju GLEJ DA TO TUD IMPLEMENTIRAS</p>
        <p class="question">KAJ NAREDITI, ČE IGRICA ZAGLIČA?</p>
        <p class="answer">Ponovno naloži stran, v kolikor pa se težava pojava me kontaktiraj <a href="SHARED\contact.php">preko obrazca</a></p>
        <p class="question">Zakaj se ob smrti ponovno pojavim na 4 nivoju?</p>
        <p class="answer">Ker si umrl in kje so mrtvi ljudje? Na pokopališču! Šalo na stran, tam se pojavič, ker igraš na težki težavnosti, in ker nisi odkril skrivnega nivoja, ki ti omogoča uporabo "checkpoint"</p>
        <p class="question">KAKO ODKLENEM DOSEŽKE?</p>
        <p class="answer">Preberi <a href="#dosezki_OG">dosežke</a></p> 
      </div>

      <div id="leaderboard">
      <h1>LEADERBOARD</h1>
      <?php 
              $sql = "SELECT * FROM leaderboard";
              $result = mysqli_query($conn, $sql);
              
              while ($row = mysqli_fetch_assoc($result))  {
                echo $row["user"]. "   (".$row["date"] .")".": " ."<br>" .$row["time"]. "<br><br>" ;
              }

          ?>
    
    </div>
  </div>
    
    
      

  <div  class="comments_DIV" id="comments_OG">
      <?php if(isset($_SESSION["username"])): ?>  
        <div class="commentsForm">
        <h1>KOMENTARJI</h1>  
          <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="GET"> 
            <textarea name="addCommentZmejelov" id="addCommentZmejelov"   placeholder=" write your comment here"></textarea>
          <div class="submitButtonClass">          <button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton">Post Comment</button></div>
          </form>
        </div>
      <?php else: ?>
        <div class="commentsFormError">
            <h1>KOMENTARJI</h1>  
            <p>Za komentiranje se <a href="SERVER\login.php">prijavite</a> ali pa <a href="SERVER\register.php">registrirajte</a> </p>
        </div>
      <?php endif; ?>
      <div class="commentsZmejelov">
        <?php 
            $sql = "SELECT * FROM comments_zmejelov_speedrun";
            $result = mysqli_query($conn, $sql);

            
            while ($row = mysqli_fetch_assoc($result))  {
              echo '<div><span class="commentAuthor"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a> (' . $row["date"] . '):</span><span class="commentText"><br>' . $row["comment"] . '</div><br><br></span>';            }
        ?>
      </div>
    </div>

  

    
    
    <div class="achievementsMainBlock" id="dosezki_OG">
      <h1>DOSEŽKI</h1>
      <?php if(isset($_SESSION["username"])): ?>
      <div class="achievements">
          <?php
                if ($_SESSION["achievements"][6] === "1") {
                  echo "<div class='oneAchievements'>";
                  echo '<img src="aimg src="assets\achivments\speedRun\speed.png""  alt="Achievement Picture 1">';
                  echo '<p>COMPLETE THE GAME IN LESS THEN A MINUTE</p>';
                  echo    ' <p>strela mc queen?</p>';
                  echo '</div>';
                  }
                  else{
                    echo '<div class="achievementsNotLoggedIn">';
                    echo '<p>COMPLETE THE GAME IN LESS THEN A MINUTE</p>';
                    echo '</div>';
                  }
                ?>
            <?php
              if ($_SESSION["achievements"][7] === "1") {
                echo "<div class='oneAchievements'>";
                  echo '<img src="assets\achivments\speedRun\complete.png" alt="Achievement Picture 1">';
                  echo '              <p>COMPLETE THE GAME</p>                  ';
                  echo    '  <p>i mean, its deffinitely something</p>';
                  echo '</div>';}
              else{
                echo '<div class="achievementsNotLoggedIn">';
                echo '<p>COMPLETE THE GAME</p>';
                echo '</div>';            }   
              ?>
            <?php
              if ($_SESSION["achievements"][1] === "1") {
                echo "<div class='oneAchievements'>";
                  echo '<img src="assets\achivments\speedRun\allDeaths.png"  alt="Achievement Picture 1">';
                  echo '      <p>DIE BY EVERY IDENTITY AT LEAST ONCE IN A GAME</p>    ';
                  echo    ' <p>on purpose or just that bad?</p>';
                  echo '</div>';}
              else{
                echo '<div class="achievementsNotLoggedIn">';
                echo '<p>DIE BY EVERY IDENTITY AT LEAST ONCE IN A GAME</p>';
                echo '</div>';            }   
            ?>

            <?php
              if ($_SESSION["achievements"][9] === "1") {
                echo "<div class='oneAchievements'>";
                  echo '<img src="assets\achivments\speedRun\star.png "  alt="Achievement Picture 1">';
                  echo '          <p>COLLECT ALL THE POSSIBLE STARS</p>                 ';
                  echo ' <p>pleae always remember to reach for the stars, you can trully do it :)</p>';
                  echo '</div>';}
            else{
              echo '<div class="achievementsNotLoggedIn">';
              echo '      <p>COLLECT ALL THE POSSIBLE STARS</p>';
              echo '</div>';            } ?>

            <?php
              if ($_SESSION["achievements"][10] === "1") {
                echo "<div class='oneAchievements'>";
                  echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
                  echo '              <p>DIE 20 TIMES IN ONE GAME</p>                 ';
                  echo    ' <p>this one was one purpose, right 🥺?i</p>';
                  echo '</div>';}
              else{
                echo '<div class="achievementsNotLoggedIn">';
                echo  '<p>DIE 20 TIMES IN ONE GAME</p>';
                echo '</div>';            } 
              ?>

        
            <?php
              if ($_SESSION["achievements"][11] === "1") {
                echo "<div class='oneAchievements'>";
                  echo '<img src="assets\achivments\speedRun\dieALot.png"  alt="Achievement Picture 1">';
                  echo '       <p>DIE BY A SPACESHIP</p>';
                echo    ' <p>this one was quite easy, right?</p>';
                  echo '</div>';
                }
              else{
                echo '<div class="achievementsNotLoggedIn">';
                echo    '<p>DIE BY A SPACESHIP</p>';
                echo '</div>';

              } 

              ?>
            <?php else: ?>
          <div >
              <p>Za odklenitev dosežkov se <a href="SERVER\login.php">prijavite</a> ali pa <a href="SERVER\register.php">registrirajte</a> </p>
          </div>
        <?php endif; ?>
    </div>  </div>
  



    <div id="footer"></div>
  </body>
  


</html>



<?php
    if(isset($_GET["submitCommentZmejelov"])){
      echo "gsdf";
      if(isset($_GET["addCommentZmejelov"])){
        $user = $_SESSION["username"];
        $comment = $_GET["addCommentZmejelov"];
        
        $sql = "INSERT INTO comments_zmejelov_speedrun (user, comment) VALUES ('$user', '$comment') "; 
        mysqli_query($conn, $sql);
        echo "<script>window.location.href = '".$_SERVER['PHP_SELF']."';</script>";
      }
    }



      mysqli_close($conn);

?>





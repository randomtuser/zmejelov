<?php
  include("SERVER/database.php");
  session_start();
    
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
<link rel="stylesheet" href="index.css">


 <meta charset="utf-8"/>
     <title>Zmejelov</title>

    <script type="text/javascript" src = "Zmejelov_basic_game/phaser.min.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/scena2.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/scena1.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/uvod.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/scena6.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/scena3.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/scena4.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/scena5.js"></script>
    <script type="text/javascript"src = "ZMEJELOV_OG/konec.js"></script>

    <script type="text/javascript"src = "ZMEJELOV_OG/game.js"></script>

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
    <h1>ZMEJELOV 1960</h1>
    <div  class="introduction" id="introduction_OG" >
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
      <div class="introductionText" >
        <p><b>ZMEJELOV 1960</b> je prvotna verzija aplikacije zasnovana v davnem 2021 letu. Danes je na voljo v svoji originali formi, 
        edina dodana stvar k igri je en dosežek, ki ga lahko dosežeš. Kljub temu, da je igra za izkušene igralce zelo hitra in enostavna, lahko na 
        začetku novim igralcem ponuja malo preglavic, tako da, v primeru težav, ne obupati z igranjem. Igra je primerna tudi za vse "OG", ki želijo podoživeti
        nostalgijo igranja prvotne verzije!</p>
      </div>
    </div>
    </div>

    <div class="game">
      <div id="game_OG">
        <?php if(isset($_SESSION["username"])): ?>
          <div id="gameContainer"></div>
        <?php else: ?>
          <div class="gameContainerError" class="col-10">
              <p>Za igranje se <a href="SERVER\login.php">prijavite</a> ali pa <a href="SERVER\register.php">registrirajte</a> </p>
          </div>
      <?php endif; ?>
      </div>
    </div>

    <div class="QnA" class="col-10" id="QnA_OG">
      <h1 >Q&N</h1>
      <p class="question">ZAKAJ JE TA IGRA TAKO ENOSTAVNA?</p>
      <p class="answer">Mogoče si pa ti tako dober 😉</p>
      <p class="question">KAJ NAREDITI, ČE IGRICA ZAGLIČA?</p>
      <p class="answer">Ponovno naloži stran, v kolikor pa se težava pojava me kontaktiraj <a href="SHARED\contact.php">preko obrazca</a></p>
      <p class="question">KAKO ODKLENEM DOSEŽKE?</p>
      <p class="answer">Preberi <a href="#dosezki_OG">dosežke</a></p>

    </div>
  
    <div class="achievementsMainBlock" id="dosezki_OG">
    <h1>DOSEŽKI</h1>
      <?php if(isset($_SESSION["username"])): ?>
        <?php
        if ($_SESSION["achievements"][12] === "1") {
          echo "<div class='oneAchievements'>";
            echo '<img src="assets\achivments\old.png"  alt="Achievement Picture 1">';
            echo '<p>DOKONČAJ IGRO</p>';
            echo    ' <p>ah, to so bili časi </p>';
            echo '</div>';
          }
        else{
          echo '<p>DOKONČAJ IGRO</p>';
        }
        ?>
       </div>
      <?php else: ?>
        <div >
            <p>Za odklenitev dosežkov se <a href="SERVER\login.php">prijavite</a> ali pa <a href="SERVER\register.php">registrirajte</a> </p>
        </div>
      <?php endif; ?>

  </div>

    <div class="comments_DIV">
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
            $sql = "SELECT * FROM comments_zmejelov_og";
            $result = mysqli_query($conn, $sql);

            
            while ($row = mysqli_fetch_assoc($result))  {
              echo '<div><span class="commentAuthor"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a> (' . $row["date"] . '):</span><span class="commentText"><br>' . $row["comment"] . '</div><br><br></span>';            }
            
        ?>
      </div>
    </div>
    <div id="footer"></div>


  </body>
  


</html>



<?php
    if(isset($_GET["submitCommentZmejelov"])){
      if(isset($_GET["addCommentZmejelov"])){
        $user = $_SESSION["username"];
        $comment = filter_input(INPUT_POST,$_GET["addCommentZmejelov"], FILTER_SANITIZE_SPECIAL_CHARS);
        $comment =  trim( $comment );
        if(!empty($comment)){
          $sql = "INSERT INTO comments_zmejelov_og (user, comment) VALUES ('$user', '$comment') "; 
          mysqli_query($conn, $sql);
          echo "<script>window.location.href = '".$_SERVER['PHP_SELF']."';</script>";
          mysqli_close($conn);

        }
     

      
      }
    }




?>





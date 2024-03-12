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
    <script type="text/javascript"src = "zmejelov_njam_njam/F0_shared.js"></script>
    <script type="text/javascript"src = "zmejelov_njam_njam/F2_inicial.js"></script>
    <script type="text/javascript"src = "zmejelov_njam_njam/F3_storyIntro.js"></script>
    <script type="text/javascript"src = "zmejelov_njam_njam/F4_gamePlayStart.js"></script>
    <script type="text/javascript"src = "zmejelov_njam_njam/F5_konec.js"></script>

    
    <script type="text/javascript"src = "zmejelov_njam_njam/F1_game.js"></script>
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
  

    <p>O zmejelovU </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eligendi. Corporis omnis reprehenderit magni vero ipsa laborum error sunt, assumenda totam facilis, corrupti illum eligendi autem unde. Odit, dolores eos?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint aut delectus nemo voluptatem cumque architecto quam, soluta doloribus modi temporibus impedit reprehenderit iusto, officiis perspiciatis dolor exercitationem consequatur repudiandae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint aut delectus nemo voluptatem cumque architecto quam, soluta doloribus modi temporibus impedit reprehenderit iusto, officiis perspiciatis dolor exercitationem consequatur repudiandae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint aut delectus nemo voluptatem cumque architecto quam, soluta doloribus modi temporibus impedit reprehenderit iusto, officiis perspiciatis dolor exercitationem consequatur repudiandae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint aut delectus nemo voluptatem cumque architecto quam, soluta doloribus modi temporibus impedit reprehenderit iusto, officiis perspiciatis dolor exercitationem consequatur repudiandae?
    </p>

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
    <p>Q&N</p>
    <P>
    
  </P>
      

  <div id="commentsZmejelov">
      <h1>KOMENTARJI</h1>
      
      <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="GET"> 
        <textarea name="addCommentZmejelov" id="addCommentZmejelov" cols="100" rows="3" style="resize: none;" placeholder="write your comment here">
      </textarea>
      <button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov">Post Comment</button>
      </form>

      <?php 
          $sql = "SELECT * FROM comments_zmejelov_speedrun";
          $result = mysqli_query($conn, $sql);

          
          while ($row = mysqli_fetch_assoc($result))  {
            echo $row["user"]. "   (".$row["date"] .")".": " ."<br>" .$row["comment"]. "<br><br>" ;
          }
 
      ?>


  </div>

  <div>
    <h1>LEADERBOARD</h1>
  <?php 
          $sql = "SELECT * FROM leaderboard";
          $result = mysqli_query($conn, $sql);

          
          while ($row = mysqli_fetch_assoc($result))  {
            echo $row["user"]. "   (".$row["date"] .")".": " ."<br>" .$row["time"]. "<br><br>" ;
          }
 
      ?>
  
  
  </div>
  <p>ACHIVEMENTS</p>
          <div>
              
          <p>ACHIEVE A SCORE OF 10</p>
              <?php
              if ($_SESSION["achievements"][6] === "1") {
                  echo '<img src="assets\achivments\speedRun\speed.png" style="max-width: 2%; max-height: 2%;" alt="Achievement Picture 1">';
                  echo    ' <p>strela mc queen?</p>';}
              ?>
          </div>
          <div>
          <p>ACHIEVE A SCORE OF 25</p>
          <?php
            if ($_SESSION["achievements"][7] === "1") {
                echo '<img src="assets\achivments\speedRun\complete.png" style="max-width: 2%; max-height: 2%;" alt="Achievement Picture 1">';
                echo    ' <p>i mean, its deffinitely something</p>';}
            ?>
          </div>
          <div>
          <p>ACHIEVE A SCORE OF 50</p>
          <?php
            if ($_SESSION["achievements"][8] === "1") {
                echo '<img src="assets\achivments\speedRun\allDeaths.png" style="max-width: 2%; max-height: 2%;" alt="Achievement Picture 1">';
                echo    ' <p>on purpose or just that bad?</p>';}
           ?>
          </div>
          <div>
          <p>ACHIEVE A SCORE OF 100</p>
          <?php
            if ($_SESSION["achievements"][9] === "1") {
                echo '<img src="assets\achivments\speedRun\star.png" style="max-width: 2%; max-height: 2%;" alt="Achievement Picture 1">';
                echo    ' <p>pleae always remember to reach for the stars, you can trully do it :)</p>';}
           ?>
          </div>
          <div>
          <p>ACHIEVE A SCORE OF 200</p>
          <?php
            if ($_SESSION["achievements"][10] === "1") {
                echo '<img src="assets\achivments\speedRun\dieALot.png" style="max-width: 2%; max-height: 2%;" alt="Achievement Picture 1">';
                echo    ' <p>this one was one purpose, right pleading eyes emoji</p>';}
           ?>
          </div>
          <div>
          <p>ACHIEVE A SCORE OF 500</p>
          <?php
            if ($_SESSION["achievements"][11] === "1") {
                echo '<img src="assets\achivments\speedRun\dieALot.png" style="max-width: 2%; max-height: 2%;" alt="Achievement Picture 1">';
                echo    ' <p>this one was quite easy, right?</p>';}
           ?>
          </div>

    <div>
  



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





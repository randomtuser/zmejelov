<?php
include("SERVER/database.php");
include('translations/load_translations.php');
if (session_status() === PHP_SESSION_NONE)
  session_start();

?>


<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TH6M7HMG59"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-TH6M7HMG59');
  </script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="/zmejelov/CSS/index.css">


  <meta charset="utf-8" />
  <title>Zmejelov</title>
  <script type="text/javascript" src="Zmejelov_basic_game/phaser.min.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_osnova.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A2_scena2.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A1_scena1.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_uvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A10_konec.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A6_scena6.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A5_scena5.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A4_scena4.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A3_scena3.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/AS_skrivni.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A7_droper.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A8_plavanje.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A9_cilj.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_zacetniZaslon.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/vrsta.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/AS_jama.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_tezavnost.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/AS_jamaKonec.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/smrt.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A7_droperUvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A7_droperTroll.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_vsi_nivoji.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_vsi_nivoji2.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_intro.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/film.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A10_outro.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_mesto.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_uvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E1_swamp.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E12_swampSkakanje.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E12_SWAMP_PORAZ.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E12_skakanjeUvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_pokerUvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_barUvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_bar.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_poker.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_poker1.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_poker2.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_poker3.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_poker4.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_barKonec.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_barRazlaga.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E12_Swamp_goraUvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E12_goraKonec.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/E0_mestoKonec.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A9_skrinja.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A9_skrinja_konec.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A9_skrinja_uvod.js"></script>
  <script type="text/javascript" src="Zmejelov_basic_game/A0_loadSave.js"></script>

  <script type="text/javascript" src="Zmejelov_basic_game/game.js"></script>

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
  <div class="introduction" id="introduction_OG">
    <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
    <div class="introductionText">
      <p><b>ZMENTURES</b> <?php $translations = loadTranslations();
                          echo $translations['zmejelov_intro_OG'] ?></p>
    </div>
  </div>

  <div class="game">
    <div id="game_OG">
      <h1><?php $translations = loadTranslations();
          echo $translations['game'] ?></h1>
      <?php if (isset($_SESSION["username"])) : ?>
        <div id="gameContainer"></div>
      <?php else : ?>
        <div class="gameContainerError" class="col-10">
          <p><?php $translations = loadTranslations();
              echo $translations['please_login'] ?> </p>
        </div>
      <?php endif; ?>
    </div>
  </div>

  <div class="QnA" class="col-10" id="QnA_OG">
    <h1>Q&N</h1>
    <p class="question"> <?php $translations = loadTranslations();
                          echo $translations['q1_OG'] ?></p>
    <p class="answer"><?php $translations = loadTranslations();
                      echo $translations['a1_OG'] ?></p>
    <p class="question"> <?php $translations = loadTranslations();
                          echo $translations['q2_OG'] ?></p>
    <p class="answer"><?php $translations = loadTranslations();
                      echo $translations['a2_OG'] ?></p>
    <p class="question"><?php $translations = loadTranslations();
                        echo $translations['q3_OG'] ?></p>
    <p class="answer"><?php $translations = loadTranslations();
                      echo $translations['a3_OG'] ?></p>
    <p class="question"><?php $translations = loadTranslations();
                        echo $translations['q4_OG'] ?></p>
    <p class="answer"><?php $translations = loadTranslations();
                      echo $translations['a4_OG'] ?></p>
  </div>


  <div class="achievementsMainBlock" id="dosezki_OG">
    <h1><?php $translations = loadTranslations();
        echo $translations['achivements'] ?></h1>
    <?php if (isset($_SESSION["username"])) : ?>
      <div class="achievements">
        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][4] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets/achivments/zmejelov_clasic/8664840_face_grin_beam_sweat_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach_OG1"] . '</p>';
          echo '<p>' . $translations["ach_OG1.1"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach_OG1"] . '</p>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][2] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png" alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach_OG2"] . '</p>';
          echo '<p>' . $translations["ach_OG2.2"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach_OG2"] . '</p>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][1] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035903_skull_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach_OG3"] . '</p>';
          echo '<p>' . $translations["ach_OG3.3"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach_OG3"] . '</p>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();

        if ($_SESSION["achievements"][5] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\8665591_ghost_halloween_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach_OG4"] . '</p>';
          echo '<p>' . $translations["ach_OG4.4"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach_OG4"] . '</p>';
          echo '</div>';
        }
        ?>

        <?php
                  $translations = loadTranslations();

        if ($_SESSION["achievements"][3] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\8665817_store_shopping_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach_OG5"] . '</p>';
          echo '<p>' . $translations["ach_OG5.5"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach_OG5"] . '</p>';
          echo '</div>';
        }
        ?>

        <?php
        $translations = loadTranslations();
        if ($_SESSION["achievements"][0] === "1") {
          echo "<div class='oneAchievements'>";
          echo '<img src="assets\achivments\zmejelov_clasic\9035826_earth_sharp_icon.png"  alt="Achievement Picture 1">';
          echo '<p>' . $translations["ach_OG6"] . '</p>';
          echo '<p>' . $translations["ach_OG6.6"] . '</p>';
          echo '</div>';
        } else {
          echo '<div class="achievementsNotLoggedIn">';
          echo '<p>' . $translations["ach_OG6"] . '</p>';
          echo '</div>';
        }
        ?>

      </div>
    <?php else : ?>
      <div>
        <p> 
          <p><?php  $translations = loadTranslations(); echo $translations['please_login_achivements'] ?></p>
        </p>
      </div>
    <?php endif; ?>

    <div class="comments_DIV" id="comments_OG">
      <?php if (isset($_SESSION["username"])) : ?>
        <div class="commentsForm">
          <h1><?php $translations = loadTranslations();
              echo $translations["KOMENTARJI"] ?></h1>
          <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
            <textarea name="addCommentZmejelov" id="addCommentZmejelov" placeholder="<?php $translations = loadTranslations();
                                                                                      echo $translations["write_comment"]; ?>"></textarea>

            <div class="submitButtonClass">
              <button type="submit" name="submitCommentZmejelov" id="submitCommentZmejelov" class="submitCommentButton"><?php $translations = loadTranslations();
                                                                                                                        echo $translations["add_comment"] ?></button>
            </div>
          </form>
        </div>
      <?php else : ?>
        <div class="commentsFormError">
          <h1><?php $translations = loadTranslations();
              echo $translations["KOMENTARJI"] ?></h1>
          <p><?php $translations = loadTranslations();
              echo $translations["please_login_comments"] ?> </p>
        </div>
      <?php endif; ?>

      <div class="commentsZmejelov" id="commentsAnchor">
        <?php
        $commentsPerPage = 5;
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
        $offset = ($page - 1) * $commentsPerPage;
        $sql = "SELECT * FROM comments_zmejelov_classic LIMIT $commentsPerPage OFFSET $offset";
        $result = mysqli_query($conn, $sql);

        while ($row = mysqli_fetch_assoc($result)) {
          echo '<div><span class="commentAuthor"><a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a> (' . $row["date"] . '):</span><span class="commentText"><br>' . $row["comment"] . '</div><br><br></span>';
        }

        $sqlCount = "SELECT COUNT(*) AS total_comments FROM comments_zmejelov_classic";
        $resultCount = mysqli_query($conn, $sqlCount);
        $rowCount = mysqli_fetch_assoc($resultCount);
        $totalComments = $rowCount['total_comments'];

        $totalPages = ceil($totalComments / $commentsPerPage);

        echo '<div class="pagination">';
        for ($i = 1; $i <= $totalPages; $i++) {
          echo '<a href="?page=' . $i . '#commentsAnchor">' . $i . '</a> ';
        }
        echo '</div>';
        ?>
      </div>
    </div>





  </div>



  <div id="footer"></div>
</body>



</html>



<?php
if (isset($_GET["submitCommentZmejelov"])) {
  echo "gsdf";
  if (isset($_GET["addCommentZmejelov"])) {
    $user = $_SESSION["username"];
    $comment = $_GET["addCommentZmejelov"];

    $sql = "INSERT INTO comments_zmejelov_classic (user, comment) VALUES ('$user', '$comment') ";
    mysqli_query($conn, $sql);
    echo "<script>window.location.href = '" . $_SERVER['PHP_SELF'] . "';</script>";
  }
}



mysqli_close($conn);

?>
<div>
  <p>POST A COMMENT</p>
  <?php
  if ($_SESSION["achievements"][4] === "1") {
    echo '<img src="assets\achivments\zmejelov_clasic\8664843_pen_to_square_icon.png"  alt="Achievement Picture 1">';
  }
  echo    ' <p>amm ja tole je pa moralo biti zabavno...imaš moje večno spoštovanje </p>';
  ?>
</div>
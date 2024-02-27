  <?php
     if (session_status() === PHP_SESSION_NONE) 
        session_start();
    //https://www.w3schools.com/howto/howto_js_sidenav.asp
  ?>
  <!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="index.css">

  <style>
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 50px;

  }

  .sidenav a {
    padding: 0px 8px 8px 32px;
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.3s;
    font-size: 25px ;

  }

  .sidenav a:hover {
    color: #4d1451;
    transition:  0.5s; 


  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

 
 ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
}



.has-subnav .subnav {
  display: none;
}

@media only screen and (min-height: 500px) {
  
}

.has-subnav:hover .subnav {
    display: block;
}

.subnav > li > a {
  font-size: 15px;
}

.bottom-element {
  position: absolute;
  bottom: 10%;
}
#title{
  color: #4d1451;
  font-size: 50px;
  padding: 0;
  margin: 10px 0 0px 10px;
}

#container {
    position: relative; /* Create a positioning context for its children */
}

#meniIcon {
    position: fixed;
    margin: 0px 0 0px 10px;
}

#meni {
  position: absolute;
    left: 40px; 
    top: 6px
}


</style>
  </head>
  <body>
  <p id="title" ><a href="/zmejelovTheFINAL/index.php" onclick="closeNav()">ZMEJELOV</a></p>
  <div id="mySidenav" class="sidenav">
  <div id="gamePlayStuff">
    <ul>
      <a href="javascript:void(0)" class="closebtn"  onclick="closeNav()">&times;</a>

      <li  class="has-subnav"><a href="/zmejelovTheFINAL/index.php" id="mainPageReturn" onclick="closeNav()">DOMOV</a>
        <ul class="subnav">
          <li ><a href="/zmejelovTheFINAL/index.php" onclick="closeNav()">OPIS</a></li>
          <li ><a href="/zmejelovTheFINAL/index.php#videos" onclick="closeNav()">VIDEO VSEBINA</a></li>
          <li ><a href="/zmejelovTheFINAL/index.php#about_proyect" onclick="closeNav()">O PROJEKTU</a></li>
      </ul>
    </li>
      <li class="has-subnav"><a href="/zmejelovTheFINAL/zmejelov_basic.php" onclick="closeNav()">ZMEJELOV ZMENTURES</a>
      <ul class="subnav">
              <li ><a href="/zmejelovTheFINAL/zmejelov_OG.php#introduction_OG" onclick="closeNav()">O IGRI</a></li>
              <li ><a href="/zmejelovTheFINAL/zmejelov_OG.php#game_OG" onclick="closeNav()">IGRA</a></li>
              <li ><a href="/zmejelovTheFINAL/zmejelov_OG.php#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li ><a href="/zmejelovTheFINAL/zmejelov_OG.php#comments_OG" onclick="closeNav()">KOMENTARJI</a></li>
              <li ><a href="/zmejelovTheFINAL/zmejelov_OG.php#dosezki_OG" onclick="closeNav()">DOSEŽKI</a></li>
      </ul>
    </li>
      <li class="has-subnav"><a href="/zmejelovTheFINAL/zmejelov_speed_run.php" onclick="closeNav()">ZMEJELOV SPEED RUN</a>
        <ul class="subnav">
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#introduction_OG" onclick="closeNav()">O IGRI</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#game_OG" onclick="closeNav()">IGRA</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#comments_OG" onclick="closeNav()">KOMENTARJI</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#dosezki_OG" onclick="closeNav()">DOSEŽKI</a></li>
            </ul>
      </li>
      <li class="has-subnav"><a href="/zmejelovTheFINAL/" onclick="closeNav()">ZMEJELOV LOVE VENTURES</a>
        <ul class="subnav">
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#introduction_OG" onclick="closeNav()">O IGRI</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#game_OG" onclick="closeNav()">IGRA</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#QnA_OG" onclick="closeNav()">Q&A</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#comments_OG" onclick="closeNav()">KOMENTARJI</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#dosezki_OG" onclick="closeNav()">DOSEŽKI</a></li>
          </ul>
      </li>
      <li class="has-subnav"><a href="/zmejelovTheFINAL/zmejelov_mcqueen.php" onclick="closeNav()">ZMEJELOV MCQUEEN   </a>
        <ul class="subnav">
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#introduction_OG" onclick="closeNav()">O IGRI</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#game_OG" onclick="closeNav()">IGRA</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#QnA_OG" onclick="closeNav()">Q&A</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#comments_OG" onclick="closeNav()">KOMENTARJI</a></li>
              <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#dosezki_OG" onclick="closeNav()">DOSEŽKI</a></li>
            </ul>
      </li>
      <li class="has-subnav"><a href="/zmejelovTheFINAL/zmejelov_njam_njam.php" onclick="closeNav()">ZMEJELOV NJAM NJAM FEST</a>
        <ul class="subnav">
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#introduction_OG" onclick="closeNav()">O IGRI</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#game_OG" onclick="closeNav()">IGRA</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#QnA_OG" onclick="closeNav()">Q&A</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#comments_OG" onclick="closeNav()">KOMENTARJI</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#dosezki_OG" onclick="closeNav()">DOSEŽKI</a></li>
          </ul>
      </li>    
      <li class="has-subnav"><a href="/zmejelovTheFINAL/zmejelov_OG.php" onclick="closeNav()">ZMEJELOV OG   </a>
        <ul class="subnav">
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#introduction_OG" onclick="closeNav()">O IGRI</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#game_OG" onclick="closeNav()">IGRA</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#QnA_OG" onclick="closeNav()">Q&A</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#comments_OG" onclick="closeNav()">KOMENTARJI</a></li>
            <li><a href="/zmejelovTheFINAL/zmejelov_OG.php#dosezki_OG" onclick="closeNav()">DOSEŽKI</a></li>
          </ul>
      </li>
         
      <div class="bottom-element">
        <?php if(empty($_SESSION["username"])):?>
          <li>   <a href="/zmejelovTheFINAL/SERVER/login.php" onclick="closeNav()">LOG IN</a></li>
        <?php else: ?>
          <li><a href="/zmejelovTheFINAL/user.php"><?php echo $_SESSION["username"]; ?></a><a href="/zmejelovTheFINAL/SERVER/logout.php">LOGOUT</a></li>
        <?php endif; ?>
        <li><a href="/zmejelovTheFINAL/about_proyect.html" id="logo">Zmejelov © 2024</a></li>
            </div>
    </ul>
  </div>
</div>



<div id="container">
    <span style="font-size:30px;cursor:pointer; color:#4d1451" onclick="openNav()">
        <span id="meniIcon">&#9776;</span>
        <span id="meni">MENU</span>
    </span>
</div>

  <script>
  function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  </script>
    
  </body>
  </html> 

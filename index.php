<?php
    session_start();

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>zmejelov</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="/zmejelov/CSS/index.css">


</head>
<body>
        <div id="header"></div>

    <script>
        $(document).ready( function() {
            $("#header").load("SHARED/header.php");
            $("#footer").load("SHARED/footer.html");
        });
    </script>


<div  class="introduction" id="introduction_OG" >
      <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" class="zmeja" class="col-10">
      <div class="introductionText" >
      <?php if(isset($_SESSION["username"])):?>
            <p >Še enkrat pozdravljeni na zmejelov IGRALNI PLATFORMI. Moje ime je Zmeja in moram priznati, da sem zelo vesela,
                 da te vidim! Na portalu je 5 iger: <ul id="options">
                    <li ><a href="zmejelov_basic.php">ZMENTURES</a></li>
                    <li><a href="zmejelov_og.php">zmejelov 1960</a></li>
                    <li><a href="zmejelov_njam_njam.php">HUNGRY FEST</a></li>
                    <li><a href="zmejelov_speed_run.php">CRA*KELOV</a></li>
                    <li><a href=""></a></li></ul> 
                 Če mene vprašaš moraš preigrati vse xd. Veselo igranje. </p>
        <?php else:?>
            <p >Naj poudarim, da sem zelo vesela, da te vidim! Na portalu je 5 iger za veliko ur igranja, z dosežki pa te spodbujam k igranju. Če mene vprašaš moraš preigrati vse xd. Za njihovo uporabo pa se moraš registrirati s klikom <a href="SERVER\register.php">tukaj</a> ali pa prijaviti s klikom <a href="SERVER\login.php">tukaj</a>. Veselo igranje. </p>
            <?php endif; ?>
      </div>
    </div>
    </div>



           
    
    <div id="videos">
        <h1>VIDEO VSEBINA</h1> 
        <div>
            <div class="pictureSliderVideo fade">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WkpYCOwkyK4?si=BSql_6SpqcIPEFWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>  
            </div>
            <div class="pictureSliderVideo fade">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WkpYCOwkyK4?si=BSql_6SpqcIPEFWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>  
            </div>
            <div class="pictureSliderVideo fade">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nN8u2-mLYUY?si=ppCsG7ehGV1jXwW9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, facere accusamus ipsa assumenda repellendus nisi ullam. Blanditiis consequuntur, voluptatum minus neque porro doloribus voluptatibus impedit, ab amet totam quaerat?</p>
                </div>             
            </div>
           <script>
                let slideIndexVideo = 0;
                showSlidesVideo();

                function showSlidesVideo() {
                let slidesVideo = document.getElementsByClassName("pictureSliderVideo");
                if (slideIndexVideo >= slidesVideo.length) {slideIndexVideo = 0}  
                for (let i = 0; i < slidesVideo.length; i++) {
                    slidesVideo[i].style.display = "none";  
                }
                slidesVideo[slideIndexVideo].style.display = "block";  
                slideIndexVideo++;
                
            
                setTimeout(showSlidesVideo, 1000); 
                }
            </script>
        </div>

    </div>
        






    <div id="about_proyect">
        <h1>»RAČUNALNIK NE DELA NAPAK, PREPROSTO IZVRŠUJE TO, KAR MU UKAŽEMO«</h1>
        <div class="pictureSlider fade">
            <img src="assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png" alt="zmentures">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/uvod/rage.png" alt="the final rage">
        </div>
        <div class="pictureSlider fade">
            <img src="assets/uvod/basic.png" alt="zmejelov">
        </div>
        <script>
            let slideIndex = 0;
            showSlides();

            function showSlides() {
            let slides = document.getElementsByClassName("pictureSlider");
            if (slideIndex >= slides.length) {slideIndex = 0}  
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slides[slideIndex].style.display = "block";  
            slideIndex++;
              
           
            setTimeout(showSlides, 3500); // Change image every 2 seconds
            }
        </script>

        <p>Projekt je začel nastajati že v srednji šoli, takrat še pod imenom "IZDELAVA 2D IGRE V HTML Z UPORABO CSS IN JAVASCRIPTA", katerega namen je bil,
          dobiti dobro oceno za maturo. 
        Namen same prenove igre, ki jo končno dobila tudi svoje ime, ni bil ta, da jo bo zdej igralo vso podeželje, ker bodimo iskreni, koliko od vas, bo sploh prišlo
         do cilja. Ne, namen je bil, da je igra dobila podobo, ki si jo zasluži (ter da je moja duša srečna). V prenovo je res šlo okoli 100 ur, igra je postala zelo kompleksna,
         kar se mislim, da se tudi odraža, v kolikor ste jo oz jo boste igrali. Med samim programiranjem je prišlo do veliko težav, na koncu se je vse uspešno rešilo - no skoraj vse. 
         Nekajkrat se je namreč zgodilo, da problema nisem znal rešiti, niti s pomočjo Googla, zato se je pregovor »If it's a bug, make it a feature« izkazal za resničnega. Sama prenova
          vsebuje nove nivoje, prenovljen UI, nove koncepte igranja in veliko ur zabave XD. Prelevila se je iz speed running igre v bolj story telling igro.
          Igra je tudi dobila dve razširitvi, City zmentures, v kateri je predstavljeno Zmejino popotovanje v mesto. Druga se imenuje The final rage, ki predstavlja nek zaključek celotnega 
          projekta. Namen zadnje razširitve je bil, da se je igra dodelala v nulo - dobila je svojo grafično podobo, bile so tudi upoštevane želje igralcev, tako, da je igra v verziji 4.0
           celo lažja kot v prejšnjih!
           Moram priznati, da sem z končno podobo Zmejelova zelo zadovoljen. To je tisti občutek, ko si v glavi nekaj zamisliš, potem pa, ko izvršiš je še 10x boljše,
           kot si si sploh predstavljal. To je zame Zmejelov.
        V tem momentu bi se rad zahvalil vsem, ki ste me inspirirali. Upam da boste v igrici užival, saj pol toliko, kot sem jaz medtem, ko sem jo delal. Prijetno in veselo igranje! </p>
        <p>Največje zahvale gredo mojemu možganu, ki je prispeval vse ideje, ter jih potem tudi pomagal implementirati.</p>
    


    </div>

            <div>
                <p>Odprto kodni projekt, vsa koda na voljo na <a href="https://github.com/randomtuser/zmejelov">githubu</a></p>
            </div>
  
    <div id="footer"></div>
</body>
</html>



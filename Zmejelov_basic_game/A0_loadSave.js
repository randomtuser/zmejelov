class A0_loadSave  extends Phaser.Scene {
    constructor(){
        super({ key: 'A0_loadSave' });
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
        this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.image("zmentures","assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png")
        this.load.image("rage","assets/uvod/rage.png")
        this.load.image("basic","assets/uvod/basic.png")
        this.load.image("usa","assets/uvod/United_States.jpg")
        this.load.image("rus","assets/uvod/Russia.jpg")
        this.load.image("slo","assets/uvod/Slovenia.jpg")
        this.load.image("gumb2","assets/uvod/gumbVeliki.png")
        this.load.image("mute","assets/uvod/mute.png")
        this.load.image("unmute","assets/uvod/umute.png")
    }
create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");




    var odmik = 2

    var pozicija1 = 400
    var razmikMedBloki = 150
    
        
    
    var text = this.add.text(30, 100, 'Hočeš naložiti zadnjo igrano verzijo na nivoju ' + lastLevel + ' iz dne ' + DATE, {
        fontSize: '60px',
        fill: '#E950F4',
        wordWrap: { width: 1150, useAdvancedWrap: true }
    });
    

    

    this.no = this.add.sprite(GAME_WIDTH/2-200,GAME_HEIGHT/2 +130, 'gumb').setInteractive();

    this.yes = this.add.sprite(GAME_WIDTH/2+200,GAME_HEIGHT/2+130, 'gumb').setInteractive();


    if (usa == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'NEXT',{ fontSize: '40px', fill: '#E950F4' });}
    else if (rus == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'СЛЕДУЮЩИЙ',{ fontSize: '20px', fill: '#E950F4' });}
    else{
        this.add.text(GAME_WIDTH/2-80 -170,GAME_HEIGHT/2 +105, 'NE',{ fontSize: '60px', fill: '#E950F4' });}
    
    if (usa == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'NEXT',{ fontSize: '40px', fill: '#E950F4' });}
    else if (rus == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'СЛЕДУЮЩИЙ',{ fontSize: '20px', fill: '#E950F4' });}
    else{
        this.add.text(GAME_WIDTH/2+170,GAME_HEIGHT/2+105, 'DA',{ fontSize: '60px', fill: '#E950F4' });}


    
   


    this.no.on('pointerup', () => {
        this.scene.stop('A0_zacetniZaslon ')
        this.scene.start('A0_tezavnost')
    })
  
    this.yes.on('pointerup', () => {
        this.scene.stop('A0_zacetniZaslon ')
        var dificultySplit = dificulty;
        const dificultyPrevious = dificultySplit.substring(0, 1); 
        const secretLevelCompletedPrevious = dificultySplit.substring(1, 2); 
        const checkPoints = dificultySplit.substring(2, 3);
        const secretAtempt = dificultySplit.substring(3, 4);

         
          if(dificultyPrevious == "0"){
              easy = true;
            }
            else{
              easy = false;

              if(secretLevelCompletedPrevious == "1"){
                zmaga  = true;
              }
              else{
                zmaga  = false;
              }
    
              if(checkPoints == "1"){
                spawn6  = true;
              }
              else if(checkPoints == "2"){
                spawnP  = true;
                spawn6  = true;
    
              }
              else{
                spawnP = false;
                spawn6  = false;
              }

              if(secretAtempt == "1"){
                zaprto  = true;
              }
              else{
                zaprto  = false;
              }

            }

          var achievementsSplit = achievements;
          const prevHardMode = achievementsSplit.substring(0, 1); 
          const prevSecret = achievementsSplit.substring(1, 2); 
          const prevDeaths = achievementsSplit.substring(2, 3);
          const prevEasy = achievementsSplit.substring(3, 4);
          const prevCity = achievementsSplit.substring(4, 5);
          const prevRuins = achievementsSplit.substring(5, 6);
          
       

          if(prevHardMode == "1")
            hardMode = true;
              
          if(prevSecret == "1")
            secret     = true;
        
          if(prevDeaths == "1")
              deaths = true;
              
          if(prevEasy == "1")
            easyMode  = true;
        
          if(prevCity == "1")
            city  = true;

          if(prevRuins == "1")
              ruins  = true;


        this.scene.start(lastLevel)
    })
    
 
  



    
    





    
}
}
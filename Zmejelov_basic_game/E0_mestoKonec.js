class E0_mestoKonec extends A0_osnova {
	constructor() {
    super("E0_mestoKonec");
       /* super({
          key: 'E0_mestoKonec',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 0 }
            }
          }
        });*/}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.atlas("trgovec", "assets/mesto/zivali/trgovec/trgovec.png", "assets/mesto/zivali/trgovec/trgovec_atlas.json")

	   }
 create() {
  if (!city){
    this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
    this.titleMusic.play(); 
    city = true;
  this.updateAchievements();
  const dataAchievements = {
    achievements: achievements,
    };
  this.updateDataBaseAchivements(dataAchievements)
  }

  mestoOpravljeno = true


    gameState.clovk = this.physics.add.sprite(120,GAME_HEIGHT /3,"trgovec");
    gameState.clovk.body.allowGravity = false;
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: GAME_WIDTH -100,
        ease: 'Linear',
        duration: 5000,
        repeat: -1,
        flipX: true,
        yoyo: true,})



    if(!mestoGameMode)  {
      this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 100, 'gumb').setInteractive();
      this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 100 , 'gumb').setInteractive();
      this.da.setScale(0.8)
      this.ne.setScale(0.8)

      if (usa == true){
        this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, 'TOWN',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 120, 'LEVEL',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
      else if (rus == true){
          this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, 'ГОРОД',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
          this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 120, 'НИВЕЛ',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
      else{
          this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, 'MESTO',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
          this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 120, 'NIVO',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
          
          
          this.da.on('pointerup', () => {
              KoordinateMestoX = 8800
              KoordinateMestoY = 1000
            this.scene.stop('E12_goraKonec')
            this.scene.start('A6_scena6')
            })
          this.ne.on('pointerup', () => {
              KoordinateMestoX = 8200
              KoordinateMestoY = 1000 
            this.scene.stop('E12_goraKonec')
            this.scene.start('E0_mesto')
            })
  
      if (usa == true){
          this.add.text(10,GAME_HEIGHT - 300, 'Hooray you have discovered all the secrets of the city! Congratulations!\nDo you want to go back to the city or to the next level?',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
      else if (rus == true){
          this.add.text(10,GAME_HEIGHT - 300, 'Ура, вы нашли все тайны города! Поздравляем!\nВы хотите вернуться в город или на следующий уровень?',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
      else{
          this.add.text(10,GAME_HEIGHT - 300, 'Jej odkril si vse skrivnosti mesta! Čestitke!\nŽeliš nazaj v mesto ali na naslednji nivo?',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
      }
    }
    else{
      this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 100 , 'gumb').setInteractive();
      this.ne.setScale(0.8)
      if (usa == true)
        this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, 'TOWN',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
      else if (rus == true)
          this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, 'ГОРОД',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
      else
          this.add.text(GAME_WIDTH/2-160,GAME_HEIGHT - 120, 'DOMOV',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
          
          

          this.ne.on('pointerup', () => {
              KoordinateMestoX = 8200
              KoordinateMestoY = 1000 
            this.scene.stop('E12_goraKonec')
            this.scene.start('A0_zacetniZaslon')
            })
  
      if (usa == true){
          this.add.text(10,GAME_HEIGHT - 300, 'Hooray you have discovered all the secrets of the city! Congratulations!\nDo you want to go back to the city or to the next level?',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
      else if (rus == true){
          this.add.text(10,GAME_HEIGHT - 300, 'Ура, вы нашли все тайны города! Поздравляем!\nВы хотите вернуться в город или на следующий уровень?',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
      else{
          this.add.text(10,GAME_HEIGHT - 300, 'Jej odkril si vse skrivnosti mesta! Čestitke!\n',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
      }
    }
    

        

  
    
    


    
  }
}
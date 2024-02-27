class E12_Swamp_goraUvod extends Phaser.Scene {
	constructor() {
        super({
          key: 'E12_Swamp_goraUvod',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 0 }
            }
          }
        });}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.atlas("trgovec", "assets/mesto/zivali/trgovec/trgovec.png", "assets/mesto/zivali/trgovec/trgovec_atlas.json")

	   }
 create() {

    this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 60, 'gumb').setInteractive();
    this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 60 , 'gumb').setInteractive();
    this.da.setScale(0.8)
    this.ne.setScale(0.8)

    gameState.clovk = this.physics.add.sprite(120,GAME_HEIGHT /3,"trgovec");
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: GAME_WIDTH -100,
        ease: 'Linear',
        duration: 5000,
        repeat: -1,
        flipX: true,
        yoyo: true,})

    if (usa == true){
      this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 80, 'YES',{ fontSize: '40px', fill: '#E950F4' });
      this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 80, 'NO',{ fontSize: '40px', fill: '#E950F4' });    }
    else if (rus == true){
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 80, 'ДА',{ fontSize: '40px', fill: '#E950F4' });
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 80, 'НЕТ',{ fontSize: '40px', fill: '#E950F4' });    }
    else{
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 80, 'NE',{ fontSize: '40px', fill: '#E950F4' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 80, 'DA',{ fontSize: '40px', fill: '#E950F4' });    }
        this.da.on('pointerup', () => {
            KoordinateMestoX = 250
            KoordinateMestoY = 1000
          this.scene.stop('E12_Swamp_goraUvod')
          this.scene.start('E12_swampSkakanje')
          })
        this.ne.on('pointerup', () => {
            KoordinateMestoX = 250
            KoordinateMestoY = 1000 
          this.scene.stop('E12_Swamp_goraUvod')
          this.scene.start('E0_mesto')
          })

    if (usa == true){
        this.add.text(10,GAME_HEIGHT - 300,  "As you walk across the swamp, you soon meet an old man,\nwho upon meeting you asks you to go to a nearby mountain to get the\nlast herb he needs for his potion. Will you help him? But know that if you\ndon't hurry, the avalanche will take you back to the valley.'",{ fontSize: '40px', fill: '#A996BC',fontFamily: 'CustomFont' });}
    else if (rus == true){
        this.add.text(10,GAME_HEIGHT - 300,'Прогуливаясь по болоту, вы встречаете старика,\nкоторый при встрече с вами просит вас отправиться на гору,\nчтобы получить последнюю специю,которая ему нужна для зелья.\nПоможете ли вы ему? Но знай,что если ты не поторопишься,\nлавина унесет тебя обратно в долину.',{ fontSize: '40px', fill: '#A996BC',fontFamily: 'CustomFont' });}
    else{
        this.add.text(10,GAME_HEIGHT - 300, 'Ko hodiš čez močvirje, kmalu srečaš starca, ki te ob srečanju prosi,\nda greš na bližnjo goro po zadnje zelišče, ki ga rabi za svoj napoj.\nMu boš pomagal?\nA vedi, da če ne boš hiter te bo odnesel plaz nazaj v dolino.',{ fontSize: '40px', fill: '#A996BC' ,fontFamily: 'CustomFont'});
    }

        

  
    
    


    
  }
}
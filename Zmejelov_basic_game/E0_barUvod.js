class E0_barUvod extends Phaser.Scene {
	constructor() {
        super({
          key: 'E0_barUvod',
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

    this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 80, 'gumb').setInteractive();
    this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 80 , 'gumb').setInteractive();
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
      this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 100, 'NO',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
      this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 100, 'YES',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
    else if (rus == true){
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 100, 'НЕТ',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 100, 'ДА',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
    else{
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 100, 'NE',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 100, 'DA',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
        this.da.on('pointerup', () => {
            KoordinateMestoX = 8800
            KoordinateMestoY = 1000
          this.scene.stop('E0_barUvod')
          this.scene.start('E0_barRazlaga')
          })
        this.ne.on('pointerup', () => {
            KoordinateMestoX = 8200
            KoordinateMestoY = 1000 
          this.scene.stop('E0_barUvod')
          this.scene.start('E0_mesto')
          })

    if (usa == true){
        this.add.text(10,GAME_HEIGHT - 300, "When you enter the bar, you hear the waiter yelling:\n'Hey, would you like to go get some groceries? We're having a feast,\nbut there's still a lot to do and I won't be able to do it. Can you help me?'",{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
    else if (rus == true){
        this.add.text(10,GAME_HEIGHT - 300, 'Когда вы входите в бар, вы слышите, как официант кричит:\n"Эй, не хочешь пойти за продуктами? Сегодня у нас праздник,\nно еще много дел\nи я не смогу сделат всего. Поможешь мне?"',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
    else{
        this.add.text(10,GAME_HEIGHT - 300, 'Ko vstopiš v bar zaslišiš natakarja, ki zavpije:\n"Ej ti, a bi šel po špecerijo? Zvečer namreč praznujemo,\nvendar je še veliko za postoriti\nin meni ne bo uspelo. Bi mi pomagal?"',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
    }

        

  
    
    


    
  }
}

class E0_pokerUvod extends Phaser.Scene {
  constructor() {
        super({
          key: 'E0_pokerUvod',
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

    this.da = this.add.sprite(GAME_WIDTH/2+100,GAME_HEIGHT - 40, 'gumb').setInteractive();
    this.ne = this.add.sprite(GAME_WIDTH/2-100,GAME_HEIGHT - 40 , 'gumb').setInteractive();
    this.da.setScale(0.8)
    this.ne.setScale(0.8)

    gameState.clovk = this.physics.add.sprite(120,GAME_HEIGHT /3-50,"trgovec");
    gameState.clovk.setScale(.8)
    gameState.clovk.move = this.tweens.add({
        targets: gameState.clovk,
        x: GAME_WIDTH -100,
        ease: 'Linear',
        duration: 5000,
        repeat: -1,
        flipX: true,
        yoyo: true,})

    if (usa == true){
      this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 60, 'NO',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
      this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 60, 'YES',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
    else if (rus == true){
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 60, 'НЕТ',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 60, 'ДА',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
    else{
        this.add.text(GAME_WIDTH/2-140,GAME_HEIGHT - 60, 'NE',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2+70,GAME_HEIGHT - 60, 'DA',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });    }
        this.da.on('pointerup', () => {
            KoordinateMestoX = 6500
            KoordinateMestoY = 1000
          this.scene.stop('E0_pokerUvod')
          this.scene.start('E0_poker')
          })
        this.ne.on('pointerup', () => {
            KoordinateMestoX = 5000
            KoordinateMestoY = 1000 
          this.scene.stop('E0_pokerUvod')
          this.scene.start('E0_mesto')
          })

    if (usa == true){
      this.add.text(10,GAME_HEIGHT - 350, "As you walk through the streets of the city, you hear a whisper. You\napproach it and hear this 'Shhh, don't tell anyone, there\nis a secret room in my forge, where cards are played.\nWant to try? The rules of the game are simple, you\nmust guess 4x, if the next card will be higher or lower than the current\none, if you do so, you win, otherwise I get your soul ;)'"  ,{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
    }
    else if (rus == true){
      this.add.text(10,GAME_HEIGHT - 350, 'Когда идешь по улицам города, слышишь шепот. Подходишь\nк нему и слышишь это "Тссс, никому не говори, но в моей кузнице\nесть потайная комната, где играют в карты. Хочешь попробовать?\nПравила игры просты, если вы угадите в 4 раза, если следующая\nкарта будет выше или ниже текущей, вы победите,\nобратно я получу вашу душу ;)',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
    }
    else{
        this.add.text(10,GAME_HEIGHT - 350, 'Med hojo po ulicah mesta zaslišiš šepet. Približaš se mu in slišiš tole\n"Pššššš, ne povej nikomur, vendar v moji kovačiji je skrivna soba,\nkjer se karta. Se hočes preizkusiti? Pravila igre so preprosta,\nče 4x pravilno uganeš ali bo naslednja karta večja ali manjša od trenutne\nzmagaš, v nasprotnem primeru, izgubiš, jaz pa dobim tvojo dušo ;)"',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
    }

        

  
    
    


    
  }
}
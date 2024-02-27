class E12_goraKonec extends Phaser.Scene {
	constructor(){
		super({ key: 'E12_goraKonec' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.video('video2', 'assets/uvod/zmeja konec.mp4');
	   }
 create() {
    
    E_iger += 1

	const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    if (usa == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        this.add.text(10, GAME_HEIGHT - 300, "Huray, you did it. The old man was able to make a potion because of you.\nLet's just hope he hasn't cursed you to give up playing the game!", {  fontFamily: 'CustomFont', fontSize: 40, color: '#A996BC' });}
        else if (rus == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'для продолжения нажимай ПРОБЕЛ', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        this.add.text(10, GAME_HEIGHT - 300, 'Ура, ты успел! Благодаря тебе старик смог приготовить зелье.\nБудем надеяться, что он не проклял вас, чтобы вы бросили игру!', {  fontFamily: 'CustomFont', fontSize: 40, color: '#A996BC' });}

        else{
        const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        this.add.text(10, GAME_HEIGHT - 300, 'Jej, uspelo ti je! Starec je lahko zaradi tebe naredil napoj.\nUpajmo samo, da te ni preklel, da boš obupal nad igrico!', {  fontFamily: 'CustomFont', fontSize: 40, color: '#A996BC' });}


    if(vrniNaPogoj == true){
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E12_goraKonec')
            this.scene.start('A0_vsi_nivoji')
          });
       
        }
    else if(mestoGameMode){
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E12_goraKonec')
            this.scene.start('E0_mesto')
          });
    }
    else{
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E12_goraKonec')
            this.scene.start('E0_mesto')
          });}
  
    
    



  
    
   


	


    


  


    
  }
}
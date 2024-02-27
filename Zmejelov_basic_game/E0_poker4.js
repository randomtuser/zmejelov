class E0_poker4 extends Phaser.Scene {
	constructor(){
		super({ key: 'E0_poker4' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.video('video2', 'assets/uvod/zmeja konec.mp4');
	   }
 create() {
    
    poker = true
    E_iger += 1

	const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    if (usa == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to start', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        const text =  this.add.text(
        10, 500, 'Yay, you did it!',
            { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' }); 
    }
        else if (rus == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'для продолжения нажимай ПРОБЕЛ', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        const text =  this.add.text(
        10, 500, 'Ура, ты успел!',
            { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
        }
        else{
        const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        this.add.text(GAME_WIDTH/2-200,GAME_HEIGHT-200, 'Jej, uspelo ti je !',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });

    
    }


    if(vrniNaPogoj == true){
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_poker4')
            this.scene.start('A0_vsi_nivoji')
          });
          
        
        }
    else{
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_poker4')
            this.scene.start('E0_mesto')
          });}
          
  
    
    



  
    
   


	


    


  


    
  }
}
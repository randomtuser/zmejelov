class E12_SWAMP_PORAZ extends Phaser.Scene {
	constructor(){
		super({ key: 'E12_SWAMP_PORAZ' });
	}
  preload() {
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);

   }
 create() {
    this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
  		this.titleMusic.play(); 
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    
     if (usa == true){
      const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to restart', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
    const text =  this.add.text(
      10, 500, "You didn't make it in time, the avalanche swept you back into the valley",
       { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' }); 
  }
    else if (rus == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'для продолжения нажимайте ПРОБЕЛ', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
    const text =  this.add.text(
      10, 500, 'Ты не успел, лавина унесла тебя обратно в долину',
       { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
    }
    else{
    const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za ponoven začetek', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
    const text =  this.add.text(
      10, 500, 'Ni ti uspelo pravočasno, plaz te je odnesel nazaj v dolino',
       { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
 
  }

  
  

  if(vrniNaPogoj ){

    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('E12_SWAMP_PORAZ')
      this.scene.start('E12_swampSkakanje')
    });
    
  }else{
    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('E12_SWAMP_PORAZ')
      this.scene.start('E0_mesto')
    });
    }
  }
}

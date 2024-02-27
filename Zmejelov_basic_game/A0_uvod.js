

class A0_uvod extends Phaser.Scene {
	constructor(){
		super({ key: 'A0_uvod' });
	}
  preload(){
    this.load.image("zmeja","assets/uvod/zmeja.png")

  }
 create() {
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
  this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");


 



  var slika = this.add.image(GAME_WIDTH-100,GAME_HEIGHT - 150,"zmeja");
  slika.setScale(0.7)

  if (usa == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'click space to start', { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });
	const text =  this.add.text(
		10, 500, 'Again, this is Zmeja, a cute little alien, which got lost.\nWell, thankfully she has YOU, to help her on her way home.\nFor moving use ➡️⬆️⬅️➡️ & SPACE.\nGood luck!',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
     this.add.text(
      200, 640, '(you will need it)',
       { fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
}
  else if (rus == true){
  const uvod =  this.add.text(xKordinata, yKordinata, 'для начала нажимай пробел', { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });
	const text =  this.add.text(
		10, 500, 'Снова, это Змея, приколный неземлёны,но она потерялась.\nНу она нашла ТЕБЕ, что бы её помоч найди дорогу домой.\nДля движении используй ➡️⬆️⬅️➡️ & SPACE.\nУдачи!',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
     this.add.text(
      150, 640, '(она тебе понадобитсься)',
       { fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });


  }
  else{
  const uvod =  this.add.text(xKordinata, yKordinata, 'klikni space za začetek', { fontSize: '60px', fill: "#E950F4", fontFamily: 'CustomFont' });
	const text =  this.add.text(
		10, 500, 'Ponovno, to  je Zmeja, prikupen mlad vesoljček,\nki pa se je izgubil. No še dobro, da je našla TEBE,\nda ji boš pomagal najti pot domov!\nZa premikanje uporabi ➡️⬆️⬇️⬅️ & SPACE.\nSREČNO!',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      this.add.text(
      200, 690, '(mislim, da jo boš rabil)',
       { fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });




}

   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('A0_uvod')
      this.scene.start('A1_scena1')
    });
  }
}


function random_color(  ){
  var rint = Math.floor( 0x100000000 * Math.random());
  return 'rgb('  + (rint & 255) + ',' + (rint >> 8 & 255) + ',' + (rint >> 16 & 255) + ')';
    
  
}
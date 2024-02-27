class AS_jama extends Phaser.Scene {
	constructor(){
		super({ key: 'AS_jama' });
	}
  preload(){

  }
 create() {
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)

 

  if (usa == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
	const text =  this.add.text(
		10, 500, 'You find yourself to be in a cave, you cant see anything, but you keep\non walking forward. You hear a voice ahead and you run towards\nit, to hear what it is saying. When you are finaly\nable to hear it, you get really scared.\n"HEHEHE YOU FELL RIGHT INTO MY TRAP"',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });





}
  else if (rus == true){
  const uvod =  this.add.text(xKordinata, yKordinata, 'нажми ПРОБЕЛ, чтобы продолжaть', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
	const text =  this.add.text(
		10, 500, 'Вы оказываетесь в пещере, вы ничего не видите, но продолжаете\n идти вперед.Вы слышите голос впереди и бежите к нему,\nчтобы услышать, что он говорит. Когда вы, наконец услышите,\nчто говорит голос, вы действительно испугаетесь.\n"ВЫ ПОПАЛИ ПРЯМО В МОЮ ЛОВУШКУ"',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });



  }
  else{
  const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
	const text =  this.add.text(
		10, 500, 'Znajdeš se v jami, hodiš nekaj časa, potem pa zaslišiš glas v bližini.\nNe razločiš kaj govori, zato stečeš proti njemu.\nČez nekaj časa glas končno postane razločen, vendar to, kar slišiš\nte prestraši.\n"HEHEHE PADEL SI V MOJO PAST, UMRI!!!!!"',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });





}

   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('uvod')
      this.scene.start('AS_skrivni')
    });
  }
}
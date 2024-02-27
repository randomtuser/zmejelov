class AS_jamaKonec extends A0_osnova {
	constructor(){
    super("AS_jamaKonec")
	}
  preload(){
    this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3',"assets/uvod/easterEgg(1).ogg"]);

  }
 create() {
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)

    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");


  if (usa == true){
     const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
     if (zmaga == true){
      const text =  this.add.text(
        10, 500, 'Аfter you drank the potion you hear:"noooooooooooooo,\nhow did you manage to avoid the stones???\nNo one has done this before, here, a potion,\nwhich will help you cheat death" ',
         { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
      else{
        const text =  this.add.text(
          10, 500, 'The blow to the head was fatal,\nyou will probably never discover the secret of the cave now',
           { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }}
  else if (rus == true){
  const uvod =  this.add.text(xKordinata, yKordinata, 'Для продолжения нажимай пробел', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
	if (zmaga == true){
    const text =  this.add.text(
      10, 500, 'После того, как вы выпили зелье, ты заслшишь:"нееееееет,\nкак тебе удалось избежать камней???\nТакого еще никто не сделал, здесь приз - зельё,\nкоторое поможет тебе обмануть смерть"',
    
       { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
    else{
      const text =  this.add.text(
        10, 500, 'Удар по голове оказался смертельным,\nтайну пещеры вы скорее всего никогда не узнаете',
         { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
  }
  else{
  const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
  if (zmaga == true){
    if (!secret){
      this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
      this.titleMusic.play(); 
      secret = true;
    this.updateAchievements();
    const dataAchievements = {
      achievements: achievements,
      };
    this.updateDataBaseAchivements(dataAchievements)
    }



	const text =  this.add.text(
		10, 500, 'Ko spijes napoj zaslišiš "neeeeeeeeeeeeeeeeeeeeeee,\nkako se ti je uspelo izogniti kamnom???\nTo še nikomur ni uspelo, za nagrado izvoli napoj,\nki ti bo pomagal pri izigravanju smrti"',
		 { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
  }
  else{
    const text =  this.add.text(
      10, 500, 'Udarec v glavo je bil fatalen,\nočitno ne bos nikoli odkril skrivnosti jame',
       { fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
  }





}


if(vrniNaPogoj == true){
 this.input.keyboard.on('keyup-SPACE', () => {
    this.scene.stop('AS_jamaKonec')
    this.scene.start('A0_vsi_nivoji')
  });
}
else{
 this.input.keyboard.on('keyup-SPACE', () => {
  this.scene.stop('AS_jamaKonec')
  this.scene.start('A4_scena4')
});}

  }

}
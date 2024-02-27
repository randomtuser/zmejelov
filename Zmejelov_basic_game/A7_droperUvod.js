class A7_droperUvod extends Phaser.Scene {
	constructor(){
		super({ key: 'A7_droperUvod' });
	}
  preload(){

    //this.load.image("zmeja","assets/uvod/zmeja.png")
	//this.load.image("spaceship" ,"assets/scena6/spaceship.png")
    this.load.image("ozadje6_2","assets/uvod/ozadje6_2.png")
    this.load.image("platformO1","assets/droper/Smoke VFX B2.png")
    this.load.image("platformO2" ,"assets/droper/Smoke VFX C1.png")
    this.load.image("platformO3", "assets/droper/Smoke VFX A1.png")
    this.load.image("platformO4","assets/droper/Smoke VFX B1.png")
    this.load.image("zmejaVladji","assets/droper/zmeja v ladji.png")

  }
 create() {
  if (easy == true){
    stZivljenj = 4
    }
  else{
  stZivljenj = 3}



    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 200)
    this.bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'ozadje6_2');
    this.bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
    //platforma
    var  random =  0
    var oblacki = ["platformO1", "platformO2", "platformO3","platformO4"] 
    for (var x = -15; x <= GAME_HEIGHT; x += random){
        random =  Math.floor(Math.random() * GAME_WIDTH/3);
        var y =  Math.floor(Math.random() * GAME_HEIGHT);
        var oblak =  Math.floor(Math.random() * 4);
        var slika = this.add.image(x,y, oblacki[oblak]);
        slika.setScale(2.6)

    }


	
    var zmeja = this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 525,"zmejaVladji");
    zmeja.setScale(.4)



  if (usa == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'click space to continue', { fontSize: '40px', fill: '#E950F4' });
	if (easy == true){
        const text =  this.add.text(
            10, 500, 'Zmeja is flying for some time, when all\nof the sudden an enemy spaceship appears\nand attacks the ship.\nAll the engines are damaged, quickly evacuate!\nBecause skydiving is dangerous, you have '+stZivljenj+ ' lives.',
            { fontSize: '40px', fill: '#A996BC' });
    
      }
      else{
        const text =  this.add.text(
            10, 500, 'Zmeja is flying for some time, when all\nof the sudden an enemy spaceship appears\nand attacks the ship.\nAll the engines are ruined, quickly evacuate!\nBecause skydiving is dangerous, you have '+stZivljenj+ ' lives.',
            { fontSize: '40px', fill: '#A996BC' });}

      }
  else if (rus == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'Д  ля продолжения нажимай пробел', { fontSize: '40px', fill: '#E950F4' });
    if (easy == true){
        const text =  this.add.text(
            10, 500, 'Змея летит какое-то время, когда внезапно\nпоявляется вражеский космический корабль\nи атакует наш корабль.\nВсе двигатели испорчены, быстро эвакуируйтесь!\nПоскольку прыжки с парашютом опасны, у вас есть\n '+stZivljenj+' жизни.',
            { fontSize: '40px', fill: '#A996BC' });

    }
    else{
        const text =  this.add.text(
            10, 500, 'Змея летит какое-то время, когда внезапно\nпоявляется вражеский космический корабль\n и атакует наш корабль.\nВсе двигатели испорчены, быстро эвакуируйтесь!\nПоскольку прыжки с парашютом опасны, у вас есть\n '+stZivljenj+' жизни.',
            { fontSize: '40px', fill: '#A996BC' });}



  }
  else{
    const uvod =  this.add.text(xKordinata, yKordinata, 'klikni space za nadaljevanje', { fontSize: '40px', fill: '#E950F4' });
    if (easy == true){
        const text =  this.add.text(
            10, 500, 'Zmeja leti nekaj časa, ko lej ga zlomka,\njo napade sovražniška ladja.\nVsi motorji so uničeni,\nZmeja hitro se evakuiraj!\nKer je skok s padalom nevaren imaš '+stZivljenj+" življenj.",
            { fontSize: '40px', fill: '#A996BC' });}
    else{
        const text =  this.add.text(
            10, 500, 'Zmeja leti nekaj časa, ko lej ga zlomka,\njo napade sovražna ladja.\nVsi motorji so uničeni,\nZmeja hitro se evakuiraj!\nKer je skok s padalom nevaren imaš '+stZivljenj+" življenj.",
            { fontSize: '40px', fill: '#A996BC' });}
    


  }
  
  if (easy == true){
   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('A7_droperUvod')
      this.scene.start('A7_droper')
    });
  }
  else{
   this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('A7_droperUvod')
      this.scene.start('A7_droperTroll')
    });

  }





  }
}
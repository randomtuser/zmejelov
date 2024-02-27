class A0_tezavnost extends A0_osnova {
	constructor() {
        super("A0_tezavnost")
    }
	preload() {
	
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")

	   }
 create() {

   
    easy = false
    var x = 150
    var y = 100
    pogojSmrtLevel = 25
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    var font = "80px"
	this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    this.add.text(x, y-30, 'G', { fontSize:  font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y + 40, 'A',{ fontSize: font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+100, 'M',{ fontSize: font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+160, 'E',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+220, '',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+280, 'M',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+340, 'O',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+400, 'D',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+460, 'E',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+520, 'S',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });

    this.lahko = this.add.sprite(GAME_WIDTH/2, 300, 'gumb').setInteractive();
    this.tezko = this.add.sprite(GAME_WIDTH/2, 150, 'gumb').setInteractive();
    this.city = this.add.sprite(GAME_WIDTH/2, 450, 'gumb').setInteractive();
    this.nivoji = this.add.sprite(GAME_WIDTH/2, 600, 'gumb').setInteractive();

   

    if (usa == true){
        this.add.text(GAME_WIDTH/2-100, 105, 'TILEN',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 150, 'No mercy, but with\nextra and secret levels',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-75, 250, 'EASY',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 296, 'Really easy, with spawn points\nand extra lives',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-80, 405, 'YOLO',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 450, 'You cant decide?\nSimply let the game choose',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-80, 555, 'LEVELS',{ fontSize: '40px',fill: '#E950F4',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 600, 'For those who just want\nto enjoy in the beauty of\none level,without story',{ fontSize: '15px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
    else if (rus == true){
        this.add.text(GAME_WIDTH/2-75, 250, 'ЛЁГХКО',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 296, 'Очень просто, с точками возрождения\nи дополнительными жизнями',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-50, 105, 'ТИЛЕН',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 150, 'Без пощады, но с\nдополнениями и секретными уровнями',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-80, 405, 'YOLO',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 450, 'Вы не можете решить?\nПросто пусть игра выбирает',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-80, 555, 'УРОВНИ',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 600, 'Для тех, которые\nхочет играт только один уровен,\nбез сказки',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
    else{
        this.add.text(GAME_WIDTH/2-150, 105, 'BREZ MILOSTI',{ fontSize: '35px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 145, 'Brez milosti, vendar z\ndodatnimi, ter skrivnimi nivoji',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 250, 'ENOSTAVNO',{ fontSize: '35px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 296, 'Enostavno, s pomožnimi točkami\nin dodatnimi življenji',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 405, 'CITY ZMENTURES',{ fontSize: '35px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 450, 'Igraj samo razširitev igre',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 555, 'NIVOJI',{ fontSize: '35px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH/2-150, 600, 'Za tiste, ki želijo uživati v\nlepoti samo enega nivoja,',{ fontSize: '20px',fill: '#A996BC',  fontFamily: 'CustomFont' });


    }
    
    this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
    this.domov.setScale(0.8)
    if (usa == true){
      this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'HOME',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
    else if (rus == true){
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'ДОМОЙ',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
    else{
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'DOMOV',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });}

        
    

    this.nivoji.setScale(1.5)
    this.nivoji.setScale(1.5)
    this.nivoji.on('pointerup', () => {
        easy = true
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_vsi_nivoji')
	})
    this.tezko.setScale(1.5)
    this.tezko.on('pointerup', () => {
        easy = false
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_intro')
	})
    this.lahko.setScale(1.5)
    this.lahko.on('pointerup', () => {
        easy = true
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_intro')
	})
    this.city.setScale(1.5)
	this.city.on('pointerup', () => {
        mestoGameMode = true;



        this.scene.stop('A0_tezavnost')
        this.scene.start('E0_mesto')
	})
    
   
    this.domov.on('pointerup', () => {
        this.scene.stop('A0_tezavnost')
        this.scene.start('A0_zacetniZaslon')
        })

	


    


  


    
  }
 


}



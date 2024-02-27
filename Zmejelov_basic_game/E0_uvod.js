class E0_uvod extends Phaser.Scene {
	constructor(){
		super({ key: 'E0_uvod' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.video('videoMESTO', 'assets/mesto/E0_uvod_video.mp4');
	   }
 create() {
    this.video = this.add.video(GAME_WIDTH/2, GAME_HEIGHT/2, 'videoMESTO');
    this.video.setScale(.65)
    this.video.play()


	





    this.gozd = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.gozd.setScale(0.8)

    this.mesto = this.add.sprite(135,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.mesto.setScale(0.8)


    if (usa == true){
        this.add.text(65,GAME_HEIGHT - 65, 'TOWN',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'FOREST',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });}
    else if (rus == true){
        this.add.text(65,GAME_HEIGHT - 65, 'ДЕРЕРВНЯ',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'ЛЕС',{ fontSize: '20px',  fill: '#E950F4',fontFamily: 'CustomFont' });}
    else{
        this.add.text(65,GAME_HEIGHT - 65, 'MESTO',{ fontSize: '40px',  fill: '#E950F4  ',fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'GOZD',{ fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont' });}

        
    
    this.gozd.on('pointerup', () => {
        this.scene.stop('E0_uvod')
        this.scene.start('A6_scena6')
        })
    
    this.mesto.on('pointerup', () => {
        this.scene.stop('E0_uvod')
        this.scene.start('E0_mesto')
        })



  
    
   


	


 }}

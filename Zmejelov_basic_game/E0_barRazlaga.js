class E0_barRazlaga extends Phaser.Scene {
    constructor() {
        super({
            key: 'E0_barRazlaga',
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
   
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    if (usa == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        const text =  this.add.text(
        10, GAME_HEIGHT - 300, 'The goal of the game is to collect groceries. The game ends after a certain\ntime (loss)or when you collect 10000 points (win). But be careful,\nnot everything that flies from the sky is suitable for the feast!',
            { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' }); 
    }
        else if (rus == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'Для продолжения нажимай ПРОБЕЛ', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        const text =  this.add.text(
        10, GAME_HEIGHT - 300, 'Цель игры - собрать продукты. Игра заканчивается через\nопределенное время (проигрыш) или когда вы наберете\n10000 очков (победа). Но будьте осторожны, не все что летит\nс неба хорошо для праздникa!',
            { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
        }
        else{
        const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        this.add.text(10,GAME_HEIGHT - 300, 'Cilj igre je pobirati špecerijo. Igra se zaključi po določenem času (poraz)\nali ko nabereš za 10000 točk hrane (zmaga).\nA pazi, ni vse kar leti z neba primerno za pojedino!',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });

    
    }


    this.input.keyboard.on('keyup-SPACE', () => {
        this.scene.stop('E0_barRazlaga')
        this.scene.start('E0_bar')
    }); 
    
 



        

    
    
    


    
    }
}
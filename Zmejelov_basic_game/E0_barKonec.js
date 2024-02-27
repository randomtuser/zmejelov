class E0_barKonec extends Phaser.Scene {
    constructor() {
        super({
            key: 'E0_barKonec',
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

        }
    create() {
    bar = true
    E_iger += 1   
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    if (usa == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        const text =  this.add.text(
            10,GAME_HEIGHT-200, 'Thanks for the help, citizens are happy\nand even decided to invite you to the feast!',
            { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' }); 
    }
        else if (rus == true){
        const uvod =  this.add.text(xKordinata, yKordinata, 'Для продолжения нажимай ПРОБЕЛ', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        const text =  this.add.text(
            10,GAME_HEIGHT-200, 'Спасибо за помощь, горожане довольны и даже\nрешили пригласить тебя на праздник!',
            { fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });
        }
        else{
        const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px',  fill: '#E950F4',fontFamily: 'CustomFont', });
        this.add.text(10,GAME_HEIGHT-200, 'Hvala za pomoč, meščani so zadovoljni z naborom hrane\nin so se celo odločili, da še tebe povabijo!',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });

    
    }
    if(vrniNaPogoj == true){
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_barKonec')
            this.scene.start('A0_vsi_nivoji')
        }); 
      }
      else{
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('E0_barKonec')
            this.scene.start('E0_mesto')
        }); }

      

        

    
    
    


    
    }
}
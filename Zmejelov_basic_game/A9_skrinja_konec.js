
class A9_skrinja_konec extends Phaser.Scene {
    constructor() {
          super({
            key: 'A9_skrinja_konec',
            physics: {
              default: 'arcade',
              arcade: { 
                gravity: { y: 0 }
              }
            }
          });}
    create() {
      this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    if (usa == true){
      const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE to continue', { fontSize: '40px', fill: "#E950F4" });
  }
  else if (rus == true){
      const uvod =  this.add.text(xKordinata, yKordinata, 'нажми ПРОБЕЛ, чтобы продолжaть', { fontSize: '40px', fill: "#E950F4" });
  }
  else{
      this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px', fill: "#E950F4" })
  }

      if (usa == true){
        this.add.text(10,GAME_HEIGHT - 300, "You hear a loud bang and suddenly you see the sun!\nYou managed to escape from the chest.\nHopefully you learned your lesson this time!",{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
      else if (rus == true){
        this.add.text(10,GAME_HEIGHT - 300, "Вы слышите громкий хлопок и вдруг видите солнце!\Вам удалось вырваться из сундука.\Надеюсь, на этот раз вы усвоили урок!",{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
      else{
          this.add.text(10,GAME_HEIGHT - 300, 'Zaslišiš glasen pok in naenkrat zagledaš sonce!\nUspelo ti je pobegniti skrinji.\nUpam, da te je tokrat izučilo!',{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
  
          
     this.input.keyboard.on('keyup-SPACE', () => { 
      this.scene.stop('A9_skrinja_konec')
      this.scene.start('A9_cilj')
      })
    
      
      
  
  
      
    }
  }
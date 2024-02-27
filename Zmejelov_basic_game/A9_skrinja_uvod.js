
class A9_skrinja_uvod extends Phaser.Scene {
    constructor() {
          super({
            key: 'A9_skrinja_uvod',
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

      if(!vrniNaPogoj){
        this.updateDificulty()
        const data = {
        lastLevel: "A9_skrinja_uvod" ,
        dificulty: dificulty
        };
    
    this.updateDataBase(data)
        .then(response => {
            console.log("progress saved!");
        })
        .catch(error => {
            console.error(error);
        });
    
        }


      if (usa == true){
        this.add.text(10,GAME_HEIGHT - 300, "You wake up, not knowing what happened, the last thing you remember is touching the chest. Did she eat you again?\nFinally you realize that you are trapped in the chest again.\nWill you be able to escape this time too?",{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
      else if (rus == true){
        this.add.text(10,GAME_HEIGHT - 300, "Вы просыпаетесь, и не помнитесь, что произошло, последнее, что вы помните, это прикосновение к сундуке. Она снова съела вас?\nНаконец ты понимаешь, что снова застрял в сундуке.\nСможешь ли ты сбежать и на этот раз?",{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
      else{
          this.add.text(10,GAME_HEIGHT - 300, 'Zbudiš se, neveš kaj se je zgodilo, zadnje česar se spomniš,\nje to, da si se dotaknil skrinje. Mar te je znova pojedla?\nKončno se zaveš, da si ponovno ujet v skrinji.\nSe ti bo tudi tokrat uspelo rešiti?',{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });
      }
  
          
     this.input.keyboard.on('keyup-SPACE', () => { 
      this.scene.stop('A9_skrinja_uvod')
      this.scene.start('A9_skrinja')
      })
    
      
      
  
  
      
    }
  }

  
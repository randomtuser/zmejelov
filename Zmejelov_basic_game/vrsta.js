class vrsta extends Phaser.Scene {
    constructor() {
          super({
            key: 'vrsta',
          });}
create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    pogoj = true
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

   






    if(vrstaTeksta == "sovraznik"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Udar sovražnika je bil fatalen...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
                vrsta_smrt = false

                if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
                    this.input.keyboard.on('keyup-SPACE', () => {
                        this.scene.stop('vrsta')
                        this.scene.start('smrt')
                    });}
                else{
                    this.input.keyboard.on('keyup-SPACE', () => {
                        this.scene.stop('vrsta')
                        this.scene.start(trenutnaScena)
                    });}
            }
    else if(vrstaTeksta == "sovraznik5"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, "The enemy's hit was fatal...",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-270,GAME_HEIGHT - 300, 'Удар врага оказался смертельным...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(GAME_WIDTH/2-250,GAME_HEIGHT - 300, 'Udar sovražnika je bil fatalen...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
                vrsta_smrt = false

                if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
                    this.input.keyboard.on('keyup-SPACE', () => {
                        this.scene.stop('vrsta')
                        this.scene.start('smrt')
                    });}
                else{
                    this.input.keyboard.on('keyup-SPACE', () => {
                        this.scene.stop('vrsta')
                        this.scene.start(trenutnaScena)
                    });}         
    }
    else if(vrstaTeksta == "level4smrt"){
        if (usa == true){
            this.add.text(GAME_WIDTH/2-350,GAME_HEIGHT - 300, 'Next time look where you are jumping 🤷',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(GAME_WIDTH/2-350,GAME_HEIGHT - 300, 'В следующий раз смотри куда прыгаешь 🤷',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(GAME_WIDTH/2-200,GAME_HEIGHT - 300, 'Drugič glej pod noge 🤷',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}  
                vrsta_smrt = false

        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
         
    }
    else if(vrstaTeksta == "level6Znak"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Opsssssssssss, there was poison ivy on the sign',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Ой, на вывеске был ядовитый плющ',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Upsiiii, na znaku je bil strupeni bršljan',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}           
                vrsta_smrt = false

                if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
    
    
            }
    else if(vrstaTeksta == "level6Vojak"){
        this.add.text(GAME_WIDTH/2-200,GAME_HEIGHT - 300, 'hihihi🙈🙊',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });   
        if(stSmrtiPrVojski > 5){
            if (usa == true){
                this.add.text(10,GAME_HEIGHT - 200, "You have died so many times here already, i will give you a hint....",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
                this.add.text(GAME_WIDTH/2-200,GAME_HEIGHT - 100, 'Golden mean',{ fontSize: '40px', fill: '#FFD700', fontFamily: 'CustomFont' });
            }
            else if (rus == true){
                    this.add.text(10,GAME_HEIGHT - 200, 'Bы уже столько раз здесь умирали, я вам подскажу...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
                    this.add.text(GAME_WIDTH/2-200,GAME_HEIGHT - 100, 'Золотая середина',{ fontSize: '40px', fill: '#FFD700', fontFamily: 'CustomFont' });
                }
             else{
                    this.add.text(10,GAME_HEIGHT - 200, 'Tokrat si že umru tle, evo, ti dam namig ;)...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
                    this.add.text(GAME_WIDTH/2-200,GAME_HEIGHT - 100, 'ZLATA SREDINA',{ fontSize: '40px', fill: '#FFD700', fontFamily: 'CustomFont' });
                } }
        vrsta_smrt = false
       
        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
        
        


    }
    else if(vrstaTeksta == "level6Kip"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Damn it looks like the statue has risen from the death.\nWhats the chance of that? 20%',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Похоже на то что статуя, встала от мертвых,\nкакой шанс этого?? 20%',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Upsiiii, zgleda, kot, da je kip vstal od mrtvih,\nkolikšna je verjetnost tega?? 20%',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}           
                vrsta_smrt = false

        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
   
            }
    else if(vrstaTeksta == "level6Znak2"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300,"Ammmm why do you think there was a sign here??",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Aммм почему ты думаешь здесь был знак??',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Ammmm zakaj misliš, da je bil tu znak???',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}    
                vrsta_smrt = false

                if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
            }
    else if(vrstaTeksta == "padec"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300,'You can only hear "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"\n as you fall through the cloud',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Вы можете слышать только "аaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\n когда упайдоте через облак',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Sliši se samo "аaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\nko ponovno padeš čez oblak',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}    
                vrsta_smrt = false

                if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start('smrt')
                });}
            else{
                this.input.keyboard.on('keyup-SPACE', () => {
                    this.scene.stop('vrsta')
                    this.scene.start(trenutnaScena)
                });}
            }
    else if(vrstaTeksta == "A8_udar"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300,"Let me guess - you got eaten by an octopus? Or you died because\na sea urchin got stuck in your throat? No, I know!\nYou married a mermaid, not knowing they are evil,\n and she killed you in your sleep. What?????\nYou died because you crashed into a wall -...-",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Дай угадаю - тебя съел осьминог? Или ты умер из-за того, что\nморской еж застрял у тебя в горле? Нет, я знаю!\nТы женился на русалке, не зная, что они злые,\nи она убила тебя во сне. Что?????\nТы погиб, потому что врезались в стену -...-',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Naj ugibam - pojedla te je hobotnica? Oz. ne, umrl si, ker se ti je\nmorski ježek zataknil v grlu? Ne, ne, že vem!\nPoročil si se z morsko deklico, nevedoč, da so zle\nin te je v spanju štihnila.\nKaj?????\nUmrl si, zato ker si se zaletel v steno -...-',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}   
            vrsta_smrt = false
        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
    
    
            }
    else if(vrstaTeksta == "A8_udarHuman"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300,"Let me guess - you got eaten by an octopus? Or you died because\na sea urchin got stuck in your throat? No, I know!\nYou married a mermaid, not knowing they are evil,\n and she killed you in your sleep. What?????\nYou died because you crashed into a fish -...-",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Дай угадаю - тебя съел осьминог? Или ты умер из-за того, что\nморской еж застрял у тебя в горле? Нет, я знаю!\nТы женился на русалке, не зная, что они злые,\nи она убила тебя во сне. Что?????\nТы погиб, потому что врезались в рыбу -...-',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Naj ugibam - pojedla te je hobotnica? Oz. ne, umrl si, ker se ti je\nmorski ježek zataknil v grlu? Ne, ne, že vem!\nPoročil si se z morsko deklico, nevedoč, da so zle\nin te je v spanju štihnila.\nKaj?????\nUmrl si, zato ker si se zaletel v ribo -...-',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}   
        vrsta_smrt = false
        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });}
     
            }
    else if(vrstaTeksta == "level6Brsljan"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300,"Аyyyyyyyyyy the platform was surrounded by poison ivy",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Платформа была окружена ядовитым плющом',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Platforma je bila obdana s strupenim bršljanom',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}  
        vrsta_smrt = false
        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('smrt')
            });}
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start(trenutnaScena)
            });
        
        
        }     
                
    }
    else if(vrstaTeksta == "swamp"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300,"Ouch, that must have hurt",{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Oй, это должно быть больно',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
         else{
                this.add.text(10,GAME_HEIGHT - 300, 'Ouch, to pa je moralo boleti',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}  
        vrsta_smrt = false
        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            trenutnaScena = "E1_swamp"
            this.input.keyboard.on('keyup-SPACE', () => { 
                this.scene.stop('E1_swamp')
                this.scene.start('smrt')
                })
           }
        else{
            if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('E1_swamp')
            }
            else {
                this.input.keyboard.on('keyup-SPACE', () => { 
                this.scene.stop('E1_swamp')
                this.scene.start('E0_mesto')
                })
            }   }

    }
    else if(vrstaTeksta == "bar"){
        if (usa == true){
            this.add.text(10, GAME_HEIGHT - 300, 'Jeez, you ran out of time. Citizens are very disappointed in you\nand also very angry since you robbed them of a good feast! ',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
          else if (rus == true){
            this.add.text(10, GAME_HEIGHT - 300, 'Боже, у тебя закончилось время. Горожане очень разочарованы над\nтобой,а также очень злы, потому что вы лишили их\nхорошего застолья!',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });}
          else{
            this.add.text(10, GAME_HEIGHT - 300,  'Joj, zmanjkalo ti je časa. Ljudje v mestu so razočarani nad tabo\nin zelo jezni, ker zaradi tebe ne bodo imeli gostije!',{ fontSize: '40px',  fill: '#A996BC',fontFamily: 'CustomFont' });} 
        vrsta_smrt = false
        if (stSmrti % pogojSmrtLevel == 0 &&  stSmrti != 0){
            trenutnaScena = "E1_swamp"
            this.input.keyboard.on('keyup-SPACE', () => { 
                this.scene.stop('vrsta')
                this.scene.start('smrt')
                })
           }
        else{
            if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('E0_barUvod')
            }
            else{
                this.input.keyboard.on('keyup-SPACE', () => { 
                    this.scene.stop('vrsta')
                    this.scene.start('E0_mesto')
                    })
            }
           
            }   

    }

    else if(vrstaTeksta == "level_1_konec"){
        vrstaTeksta = ""
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Huray you two made through the woods. I suppose it was hard, h.\nBut what is that in the distance? A desert?\nHopefully you have a lot of water with you.\nAnyways we are already closer to the end, or are we hehe!', { fontFamily: 'CustomFont' , fontSize: 40, color: '#A996BC' });}
        else if (rus == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Ура мы прошли через лес, а что я вижу сейчас?\nПустыню? Я надеюсь у тебе есть много воды.\nНу, мы на шаг ближе дому, или мы хехе. ', { fontFamily: 'CustomFont' , fontSize: 40, color: '#A996BC' });}
        else{
            this.add.text(10,GAME_HEIGHT - 300, 'Uff končno se vama je uspelo prebiti čez gozd. Je bilo naporno?\nČlovek bi si rekel, da je! Kaj pa zdaj to vidim v daljavi? Pesek?\nUpam, da imaš veliko vode s seboj ;).\nKakorkoli, smo že bližje cilju.\nAli pač hehe.', { fontFamily: 'CustomFont' , fontSize: 40, color: '#A996BC' });
            }
        if(vrniNaPogoj){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A2_scena2')
            });}
    }
    else  if(vrstaTeksta == "level_2_konec"){
        vrstaTeksta = ""
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'You were really lucky to not get hit by a sandstorm\nor even worse RAIN. But what is this now? A chest ate you?\n I wonder what could actually follow...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'У тебе повезло што вас не обрушилься шторм или хуже ДОЖД!\nНу а что же это? Вас съел сундук?\nМне интересует что может продолжить дальше...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(10,GAME_HEIGHT - 300, 'Sta pa mela kr srečo, da vaju ni doletel kakšn vihar\nali pa še huje, DEŽ. Sam kaj je zdej to? Kr skrinja VAJU JE POJEDLA IN ZDJ SE ZNAJDS V NJEJ :D.\nFul me zanima kaj lahko sploh še sledi...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A3_scena3')
            });}
    }
    else  if(vrstaTeksta == "level_3_konec"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'He he he, looks like the top platform was fake and you died.\nIt was really obvious to me, but to you...\nWell, gl in the realm of death :).',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Хе хе хе, похоже на то что верхын платформ был фейк и ты умер.\nМне это было совершенно очевиднo...\nНу, много удачи между мертвеми :).',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(10,GAME_HEIGHT - 300, 'He he he, zgleda, kot, da je bila zgornja ploščad samo navidezna\nin si umrl. Meni je delovalo zelo očitno, tebi pa...\nNo, ja veliko sreče med mrtvimi :)',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
      if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A4_scena4')
            });}
    }
    else if(vrstaTeksta == "level_4_konec"){
        vrstaTeksta = ""
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Good try, but well to raise from the dead you will need to put\nin more effort. Yep, more challenges ahead! XD',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
            if(zaprto == false  && easy == false){
                this.add.text(10,GAME_HEIGHT - 100, 'Ammm did we leave out the secret level on purpose? Just asking :)', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}}
            else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Хорошая попытка, ну чтобы ты встал от мёртвих\nнадо более стараться. Да, более вызов впереди XD.',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
                if(zaprto == false  && easy == false){
                    this.add.text(10,GAME_HEIGHT - 100, 'Аммм, мы намеренно упустили секретный уровень??\nПросто спрашиваю :)', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}}
            else{
                this.add.text(10,GAME_HEIGHT - 300, 'Dober poskus, samo da vstaneš od mrtvih bo pa potrebno malo več truda,\nkot pa pojesti jabolko. Jp, še več preizkušenj te čaka XD.',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
                if(zaprto == false  && easy == false){
                    this.add.text(10,GAME_HEIGHT - 100, 'Ammm a skrivni nivo smo zanalašč izpustil? Samo vprašam :)', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}}
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A5_scena5')
            });}
    }
    else if(vrstaTeksta == "level_5_konec"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'GNASafsfČLFASGHAS\nand suddenly you are alive again. It is hard to raise from the dead, h?',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
            }
        else if (rus == true){
            this.add.text(10,GAME_HEIGHT - 300, 'GNASafsfČLFASGHAS\nи ты снова жив! Встават от мёртвих трудно, х?',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
            }
        else{
            this.add.text(10,GAME_HEIGHT - 300, 'GNASafsfČLFASGHAS\nin kar naenkrat se spet znajdeta v svoji človeški formi - iz krvi in mesa.\nVstat od mrtvih je težko, h?!', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
            }
            
       
        
        
        
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
                this.scene.stop('vrsta')
                this.scene.start('E0_uvod')
            }); 
           }
    }
    else if(vrstaTeksta == "level_6_konec"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Oh, this jumping between trees, all those jungle traps, so much work, but, but you did it!!\nZmeja made it to the ship.Lets just hope something bad does not happen on her way home...',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'О, эти прыжки между деревьями, все эти ловушки в джунглях, столько работы, но, но ты это сделал!!\nЗмея нашла космический корабль',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(10,GAME_HEIGHT - 300, 'Joj to skakanje med drevesi, vse te pasti jungle, toliko dela ampak, ampak\ntebi je uspelo!! Zmeja je prišla do ladje.\nZdej pa samo upajva, da se ji na poti kaj ne zgodi...', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A7_droperUvod')
            });}
    }
    else if(vrstaTeksta == "level_7_konecTroll"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Ouch, right on the floor. Lets try that again!',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Оуч, пряма на тла. Давайте побробуем снова!',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(10,GAME_HEIGHT - 300, 'Ouč, direktno na tla. Dejmo to še enkrat ponovit!', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A7_droper')
            });}
    }
    else if(vrstaTeksta == "level_7_konec"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 300, 'Uf, that could have been dangerous, can you imagine\nif there was not any water?\nI just hope you two have taken a deep breath,\nbecause you are going to be diving',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(10,GAME_HEIGHT - 300, 'Уф, это могло быть опасно, представляете,\nесли бы не было воды?\nЯ просто надеюсь, что вы двое сделали глубокий вдох,\nпотому что вы собираетесь нырять.',{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
            else{
                this.add.text(10,GAME_HEIGHT - 300, 'Joj, tole zdele je bilo nevarno, si predstavljaš,\nkaj bi se zgodilo, če ne bi padla v vodo?\nUpam samo, da sta dobro zajela zrak, ker bosta morala malo plavati.', {fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });}
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
          
            }
        else{
            this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start('A8_plavanje')
            });}
    }
    else if(vrstaTeksta == "level_8_konec"){
        if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            }
        else{
            this.scene.stop('vrsta')
            this.scene.start('A9_skrinja_uvod')
           }
    }
    else if(vrstaTeksta == "level_9_konec"){
        if (usa == true){
            this.add.text(10,GAME_HEIGHT - 350, "You hear a loud bang and suddenly you see the sun!\nYou managed to escape from the chest.\nHopefully you learned your lesson this time!",{ fontSize: '30px',  fill: '#A996BC',fontFamily: 'CustomFont' });
          }
          else if (rus == true){
            this.add.text(10,GAME_HEIGHT - 350, "Вы слышите громкий хлопок и вдруг видите солнце!\Вам удалось вырваться из сундука.\Надеюсь, на этот раз вы усвоили урок!",{ fontSize: '30px',  fill: '#A996BC',fontFamily: 'CustomFont' });
          }
          else{
              this.add.text(10,GAME_HEIGHT - 350, 'Zaslišiš glasen pok in naenkrat zagledaš sonce!\nUspelo ti je pobegniti skrinji.\nUpam, da te je tokrat izučilo!',{ fontSize: '30px',  fill: '#A996BC',fontFamily: 'CustomFont' });
          }
          if(vrniNaPogoj == true){
                this.scene.stop('vrsta')
                this.scene.start('A0_vsi_nivoji')
            
            }
        else{
            this.scene.stop('vrsta')
            this.scene.start('A10_outro')
          }
       
    }
    else{
        this.add.text(10,GAME_HEIGHT - 300, 'ERROR'+ vrstaTeksta,{ fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });       
        this.input.keyboard.on('keyup-SPACE', () => {
            this.scene.stop('vrsta')
            this.scene.start(trenutnaScena)
        });
    }


    




    
    
      
  
  
      
    }
  }


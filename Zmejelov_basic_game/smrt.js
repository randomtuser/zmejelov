class smrt extends A0_osnova {
	constructor(){
    super("smrt")
	}
  preload(){
    this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3',"assets/uvod/easterEgg(1).ogg"]);

  }
 create() {
    const xKordinata =(Math.random() * 490)
    const yKordinata =(Math.random() * 350)
    this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
		this.titleMusic.play();  

  var angQuoti = ["Do one thing every day that scares you.","Do one thing every\nday that scares you.","One day or day one.\nYou decide.",
  "No one is to blame for your\nfuture situation but yourself", "If you want to besuccessful,\nthen become Successful.", "The hard days are what\nmake you stronger." ]
  var  stUSA =  Math.floor(Math.random() * (angQuoti.length-2)); 

  var sloQuoti = ["Zmaga nad samim seboj je največja zmaga.","Šibki tekači čakajo na priložnost,\nmočni jo ustvarijo.","Naredi, kar zmoreš, s tistim,\nkar imaš, tam, kjer si.",
  "Volja zmagati ni nič\nbrez volje pripraviti se.", "V lastnem znoju\nni še nihče utonil.", "Na vrhu je prostora, kolikor\nga hočete, samo ne za sedenje.", "Umetnost uspeha je v tem, da znaš\nbiti hkrati drzen in previden.","Nemogoče pomeni samo to, da vam bo\nvzelo malo več časa, kot ste načrtovali." ]
  var  stSLO =  Math.floor(Math.random() * (sloQuoti.length-2)); 

  var rusQuoti = ["Стремете се към прогрес,\nне към съвършенство.","Силата не идва от физическия капацитет.\nТя идва от неукротимата воля.","Разликата между цел и\nмечта е крайният срок",
  "Тайната да излезеш\nначело е да започнеш.", "Изчисти си разума\nот не мога." ]
  var  stRUS =  Math.floor(Math.random() * (angQuoti.length-2)); 
  if (!deaths){
    this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
    this.titleMusic.play(); 
    deaths = true;
  this.updateAchievements();
  const dataAchievements = {
    achievements: achievements,
    };
  this.updateDataBaseAchivements(dataAchievements)
  }



  if (usa == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'click SPACE continue', { fontSize: '30px', fill: '#A996BC', fontFamily: 'CustomFont' });
    if (easy == false){
      checkpoint = true
    this.add.text(10,500, 'Ammmmm how can you die so many times??.\nI guess i can help you out a bit ;)\n\n'+'"'+angQuoti[stUSA]+'"',{ fontSize: '30px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
    else{
      this.add.text(10,500, 'Ammmmm this is supposed to be an easy mode?\nI dont even know how to help you more.\n\nig with this?\n'+'"'+angQuoti[stUSA]+'""',{ fontSize: '30px',fill: '#A996BC',  fontFamily: 'CustomFont' });}}
  else if (rus == true){
    const uvod =  this.add.text(xKordinata, yKordinata, 'для начала нажимай ПРОБЕЛ', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
    if (easy == false){
      checkpoint = true
    this.add.text(10,500, 'Аммммммммм я не знал\nчто можно так много умереть.\nВы заслуживаете небольшого поощрения ;)\n\n'+'"'+ rusQuoti[stRUS]+'"',{ fontSize: '30px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
    else{
      this.add.text(10,500, 'Aммм это легкий режим, как можно так много умерет??\nЯ не знаю как тебе более помочы!\n\n'+ '"'+rusQuoti[stRUS]+'"',{ fontSize: '30px',fill: '#A996BC',  fontFamily: 'CustomFont' });}}
  else{
    const uvod =  this.add.text(xKordinata, yKordinata, 'klikni SPACE za nadaljevanje', { fontSize: '40px', fill: '#A996BC', fontFamily: 'CustomFont' });
    if (easy == false){
      checkpoint = true
    this.add.text(10,500, 'Ammmmm sploh nisem vedu,\nda lahko nekdo tokrat umre.\nOčitno si zaslužiš malo spodbude ;)\n\n'+'"'+sloQuoti[stSLO]+'"',{ fontSize: '30px',fill: '#A996BC',  fontFamily: 'CustomFont' });
    }
    else{
      this.add.text(10,500, 'Ammmmm to je lahek način, kako lahko tokrat umreš?\nSploh nevem kako naj ti še pomagam. Mogoče s tem?\n\n'+'"'+sloQuoti[stSLO]+'"',{ fontSize: '30px',fill: '#A996BC',  fontFamily: 'CustomFont' });}}
  
 this.input.keyboard.on('keyup-SPACE', () => {
  this.scene.stop('smrt')
  this.scene.start(trenutnaScena)
    });
  }

  




}
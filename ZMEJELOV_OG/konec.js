class konec extends Phaser.Scene {
	constructor(){
		super({ key: 'konec' });
	}
	preload() {
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3',"assets/uvod/easterEgg(1).ogg"]);
	   }
  create() {



		const uvod =  this.add.text(100, 100, 'Jej! Zmeja je našla pot domov!  \nhvala za igranje :)', { fontSize: '60px', fill: '#8B0000' });
	
	if(!completed ){
		this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });   
		this.titleMusic.play(); 
		completed = true;
		this.updateAchievements();
		const dataAchievements = {
			achievements: achievements,};
		this.updateDataBaseAchivements(dataAchievements)
		
	}
	


  }
  replaceCharAt(str, index, replacement) {
    if (index < 0 || index >= str.length) {
        return str; // Index out of range, return original string
    }
    return str.substring(0, index) + replacement + str.substring(index + 1);
}
  updateAchievements() {
    var achievementsUpdated = achievements;
    if (completed) 
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 12, "1");
	console.log(achievementsUpdated)
    achievements = achievementsUpdated;
	}
	updateDataBaseAchivements(data) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();	
			xhr.open("POST", "/zmejelovTheFINAL/SERVER/achivmentsUpdater.php", true);
			xhr.setRequestHeader("Content-Type", "application/json");

			xhr.onreadystatechange = function() {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 200) {
						console.log("Server Response:", xhr.responseText);
						resolve("Database updated successfully");
					} else {
						reject("Failed to update database");
					}
				}
			};

			xhr.send(JSON.stringify(data));
		});

	}



}

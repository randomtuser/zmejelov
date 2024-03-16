let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 
timer = true
var uploaded = false

class S0_shared extends Phaser.Scene {
    constructor(key) {
        super({
            key: key
        })
    }
	preload() {
		this.load.atlas("Zmeja","assets/najdela/najdela.png","assets/najdela/najdela.json")
		this.load.spritesheet('ZmejaDyingAnimation', 'assets/ZMEJA/zmeja_death.png', {
			frameWidth: 500,  
			frameHeight: 420, 
		});
		this.load.spritesheet('ZmejaMoving', 'assets/ZMEJA/zmejaMoving.png', {
			frameWidth: 220,  
			frameHeight: 292, 
		});
		this.load.spritesheet('ZmejaIdle', 'assets/ZMEJA/zmejaIdle.png', {
			frameWidth: 220,  
			frameHeight: 302, 
		});

	   }
	 create() {
	
	gameState.active = true;

	

	
	
	this.anims.create({
			key: 'walk',
			frames: [
				{ key: 'Zmeja',frame:"Wraith_03_Moving Forward_000.png" },],
			frameRate: 8,
			repeat: -1
		});
	
	this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('ZmejaIdle', { start: 0, end: 7 }), 
			frameRate: 4,
			repeat: -1
		});

	this.anims.create({
		key: 'dying',
		frames: this.anims.generateFrameNumbers('ZmejaDyingAnimation', { start: 0, end: 12 }), // Adjust the range as needed
		frameRate: 10,
		repeat: -1
	});


	this.anims.create({
			key: 'umre',
			frames: [
				{ key: 'Zmeja',frame:"Wraith_03_Dying_000.png" },],
			frameRate: 8,
			repeat: -1
		});



	this.anims.create({
				key: 'skok',
				frames: [
					{ key: 'Zmeja',frame:"Wraith_03_Idle_000.png" },],
				frameRate: 8,
				repeat: -1
			});
		

	gameState.cursors = this.input.keyboard.createCursorKeys();
	
	
	
	
	
	


	  }

update(arg) {
	if (arg == "basic"){
	if (gameState.active) {
		if ((gameState.cursors.up.isDown) /*&& gameState.junak.body.touching.down*/) {
			gameState.junak.anims.play('skok', true);
			gameState.junak.setVelocityY(this.getJumpingSpeed())}
		else if(gameState.cursors.right.isDown) {
			gameState.junak.setVelocityX(500)
			gameState.junak.anims.play('walk', true)
			gameState.junak.flipX = false;}
		else if ( gameState.cursors.left.isDown) {
			gameState.junak.setVelocityX(-500);
			gameState.junak.anims.play('walk', true);
			gameState.junak.flipX = true;}
		else {
			gameState.junak.setVelocityX(0);
			// Plays the idle animation if no arrow keys are pressed
			gameState.junak.anims.play('idle', true);}

}


	

}



}
updateAchievements() {
    var achievementsUpdated = achievements;
	console.log(achievements)
    if (completedSpeedy) 
        completedSpeedy = this.replaceCharAt(achievementsUpdated, 6, "1");
	if (completedGame)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 7, "1");
	if (dieDiverse)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 8, "1");
	if (stars)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 9, "1");
	if (dieALot)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 10, "1");
	if (quickDeath)
		achievementsUpdated = this.replaceCharAt(achievementsUpdated, 11, "1");
		console.log(achievements)
    achievements = achievementsUpdated;
}


resetGame(){
	var disableReturnBack = false //player cant take the easy way out 
	var stopChecking = false //so it doesnt dispplay every second if disableReturnBack
	var hotdogShow = true //shows a hotdog
	var canWin = false //if the player touches spaceship does he win
	setJumpingSpeed(-650)
}




getJumpingSpeed(){
	return gameState.speed;
}

setJumpingSpeed(speedNew){
	gameState.speed = speedNew;
}


 updateDataBase(data) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();	
		xhr.open("POST", "/zmejelov/SERVER/resultUpdater.php", true);
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

updateDataBaseAchivements(data) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();	
		xhr.open("POST", "/zmejelov/SERVER/achivmentsUpdater.php", true);
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



replaceCharAt(str, index, replacement) {
    if (index < 0 || index >= str.length) {
        return str; // Index out of range, return original string
    }
    return str.substring(0, index) + replacement + str.substring(index + 1);
}

stopWatchStop(){
	timer = false;
	//console.log(hour+" "+ minute+" "+second+count)
	if(!uploaded){
		uploaded = true
		var timeToComplete = hour + " " + minute+ " " + second +" " + count
		finalTime = parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

		const data = {
			time: timeToComplete ,
		  };
		  
		  this.updateDataBase(data)
			  .then(response => {
				  console.log(response);
			  })
			  .catch(error => {
				  console.error(error);
			  });
	}
	


}





} 
//https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/
function stopWatchStart() { 	
    setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
    count++;
	if(timer){
		if (count == 100) {
			second++;
			count = 0;
		}
	
		if (second == 60) {
			minute++;
			second = 0;
		}
	
		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}
	
		let hrString = hour.toString().padStart(2, '0');
		let minString = minute.toString().padStart(2, '0');
		let secString = second.toString().padStart(2, '0');
		let countString = count.toString().padStart(2, '0');
	
		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
	}
    
}



// wins 

var wins = 0;

// losses

var losses = 0;

// guesses

var guesses = 9;

// computer's letter

var computersLetter = "";

var letterBucket = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" ];


// guesses so far

var soFar = "";

// game start function

function startgame() {
	wins = 0;
	losses = 0;
	guesses = 9;

}

// random letter function

var checkLetterBucket = function() {
	computersLetter = letterBucket[Math.floor(Math.random() * letterBucket.length)];
	console.log(computersLetter);
}

checkLetterBucket();

startgame();

// keyboard event listerner

document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	
	soFar = soFar + letter + " ";

	if (letter == computersLetter) {
		wins = wins + 1;
		guesses = 9;
		soFar = "";
		checkLetterBucket();
	} else {
		guesses = guesses - 1;
	}

	console.log("wins = " + wins);
	console.log("guesses = " + guesses);

	if (guesses == 0) {
		losses = losses + 1;
		soFar = "";
		guesses = 9;
	}

	console.log("losses = " + losses);




// update display

	displayResults();

};


function displayResults() {
document.getElementById("guessesLeft").innerHTML = guesses;
document.getElementById("wins").innerHTML = wins;
document.getElementById("soFar").innerHTML = soFar;
document.getElementById("losses").innerHTML = losses;

}

displayResults();
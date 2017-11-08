// wins 

var wins = 0;

// loses

var loses = 0;

// guesses

var guesses = 9;

// computers letter

var computersLetter = "e";

// guesses so far

var soFar = "";

// keyboard event listerner

document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	
	soFar = soFar + letter + " ";

	if (letter == computersLetter) {
		wins = wins + 1;
		guesses = 9;
		soFar = "";
	} else {
		guesses = guesses - 1;
	}

	console.log("wins = " + wins);
	console.log("guesses = " + guesses);

	if (guesses == 0) {
		loses = loses + 1;
	}

	console.log("loses = " + loses);

// update display

	displayResults();

};


function displayResults() {
document.getElementById("guessesLeft").innerHTML = guesses;
document.getElementById("wins").innerHTML = wins;
document.getElementById("soFar").innerHTML = soFar;



}

displayResults();
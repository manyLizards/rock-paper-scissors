var options = ["R","P","S"];

var wins = 0;
var ties = 0;
var losses = 0;

var playGame = function() {
    var userChoice = window.prompt("Let's play Rock, Paper, Scissors! Enter R, P, or S:");

    if (!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length); //random number between 0-2 (3)
    var compChoice = options[index];

    window.alert("The computer chose " + compChoice);

  //if the choices are the same, it's a tie
    if (userChoice === compChoice) {
        ties++;
        window.alert("It's a tie!");
        //check win conditions
    } else if (
        (userChoice ==="R" && compChoice === "S") ||
        (userChoice === "P" && compChoice === "R") ||
        (userChoice === "S" && compChoice === "P")
    ) {
        wins++;
        window.alert("You win!");
        //check lose conditions
    } else {
        losses++;
        window.alert("You lost!");
    }

    window.alert (
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    
    var playAgain = window.confirm("Play again?");
    
    if (playAgain) {
        playGame();
    }x
};

playGame();

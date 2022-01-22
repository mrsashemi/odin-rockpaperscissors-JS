/* create an array containing rock paper scissors */
const rochambeau = ["Rock", "Paper", "Scissors"]

/* create a function that plays rock paper scissors with the computer */
function rockPaperScissors(x) {
/* Have the computer pick values from the array that can be compared with the players choice */    
   let computerSelection = rochambeau[Math.floor(Math.random()*rochambeau.length)].toUpperCase(); 
   let playerSelection = x.toUpperCase();
   if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
       return "You win! Rock beats scissors."
   } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
       return "You win! Paper beats rock."
   } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
       return "You win! Scissors beats paper." 
   } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
       return "You lose! Paper beats rock."
   } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
       return "You lose! Scissors beats paper." 
   } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
       return "You lose! Rock beats scissors." 
   } else if (playerSelection === computerSelection) {
       return "It's a tie!"
   } else {
       return "That's not how you play!"
   }
}
/* create a function game() that keeps score in a prompt window */
function game() {
  /* Use a foor loop ot iterate through the score */
  for (let player = 0, js = 0; player + js < 5; player, js) {
    let match = prompt("Rock, Paper, Scissors?");
    let rps = rockPaperScissors(match);
        switch (true) {
            case (rps.includes("win!")):
            alert(rps + " Player Score: " + (++player) + " vs. JS Score: " + js + " \nBest of 5. Play again?" );
            break;
            case (rps.includes("lose!")):
            alert(rps + " Player Score: " + player + " vs. JS Score: " + (++js) + " \nBest of 5. Play again?" );
            break;
            case (rps.includes("tie!")):
            alert(rps + " Player Score: " + player + " vs. JS Score: " + js + " \nBest of 5. Play again?" );
            break;
            case (rps.includes("not")):
            alert(rps + " Player Score: " + player + " vs. JS Score: " + js + " \nBest of 5. Play again?" );
            break;
        }
        if (player + js === 5 && player > js) {
            alert("You win! Thanks for playing!")
        } else if (player + js === 5 && player < js) {
            alert("You lose! Lets play again sometime.")
        }
    }
}
    
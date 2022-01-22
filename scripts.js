const rochambeau = ["Rock", "Paper", "Scissors"]

function rockPaperScissors(x) {
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
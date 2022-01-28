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

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width = 300;
const canvasHeight = canvas.height = 300;

const playerImage = new Image();
playerImage.src = 'images/trainer.png'
const pokeballImage = new Image();
pokeballImage.src = 'images/pokeball.png'


// Player (trainer) Variables
let frameX = 0;
let trainerCoordinateX = 0;
let spriteWidth = 70;
let gameFrame = 0;
let gameCoordinateX = 0;
let coordinateX = 0;
const staggerFrames = 15;
// Pokeball Variables
let ballFrame = 0;
let ballGameCoordinateX = 0;
let ballGameCoordinateY = 0;
const staggerBallFrames = 400;

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    let trainerPositionX = Math.floor(gameCoordinateX/staggerFrames) % 5;
    frameX = spriteWidth * position;
    trainerCoordinateX = trainerPositionX * -25
    ctx.drawImage(playerImage, frameX, 0, spriteWidth, 54, trainerCoordinateX, 150, 150, 150);
    requestAnimationFrame(animate)
    if (frameX < 350) {
        gameFrame++;
        gameCoordinateX++; 
    } else {
        cancelAnimationFrame(animate);
        function pokeballAnimate() {
            let ballPosition = Math.floor(ballFrame/staggerBallFrames) % 8;
            let ballPositionX = Math.floor(ballGameCoordinateX/staggerBallFrames) % 8;
            let ballPositionY = Math.floor(ballGameCoordinateY/staggerBallFrames) % 8;
            let ballFrameX = 40 * ballPosition;
            let ballCoordinateX = -80 + (ballPositionX * 25);
            let ballCoordinateY = 0 + (ballPositionY * 5);
            ctx.drawImage(pokeballImage, ballFrameX, 0, 40, 50, ballCoordinateX, ballCoordinateY, 150, 150);
            requestAnimationFrame(pokeballAnimate);
            if (ballFrameX < 280) {
                ballFrame++;
                ballGameCoordinateX++;
                ballGameCoordinateY++;
            } else {
                cancelAnimationFrame(pokeballAnimate);
            }
        }
        pokeballAnimate();
    }
}
animate();



    
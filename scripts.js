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

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const canvasWidth = canvas.width = 300;
const canvasHeight = canvas.height = 300;

const canvas2Width = canvas2.width = 300;
const canvas2Height = canvas2.height = 300;

const playerImage = new Image();
playerImage.src = 'images/trainer.png'
const pokeballImage = new Image();
pokeballImage.src = 'images/pokeball.png'

const cyndaquil = new Image();
cyndaquil.src = 'images/cyndaquil.png'
const totodile = new Image();
totodile.src = 'images/totodile.png'
const chikorita = new Image();
chikorita.src = 'images/chikorita.png'

const computerImage = new Image();
computerImage.src = 'images/professoroak.png'
const computerPokeball = new Image();
computerPokeball.src = 'images/pokeball2.png'


// Player (trainer) Variables
let frameX = 0;
let trainerCoordinateX = 0;
let spriteWidth = 70;
let gameFrame = 0;
let gameCoordinateX = 0;
let coordinateX = 0;
const staggerFrames = 7;

// Pokeball Variables
let ballFrame = 0;
let ballGameCoordinateX = 0;
let ballGameCoordinateY = 0;
const staggerBallFrames = 200;

// Computer Variables
let computerCoordinateX = 150;
let ball2Frame = 0;
let ball2GameCoordinateX = 0;
let ball2GameCoordinateY = 0;
const staggerBall2Frames = 200;

const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const grass = document.querySelector('#grass');

let variation = 0

function chooseFire () {
    animate();
    variation = 1;
    animateComputer();
}

function chooseWater () {
    animate();
    variation = 2;
    animateComputer();
}

function chooseGrass () {
    animate();
    variation = 3
    animateComputer();
}

fire.addEventListener('click', chooseFire);
water.addEventListener('click', chooseWater);
grass.addEventListener('click', chooseGrass);

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    let trainerPositionX = Math.floor(gameCoordinateX/staggerFrames) % 5;
    frameX = spriteWidth * position;
    trainerCoordinateX = trainerPositionX * -25
    ctx.drawImage(playerImage, frameX, 0, spriteWidth, 54, trainerCoordinateX, 150, 150, 150);
    requestAnimationFrame(animate);
    if (frameX < 350) {
        gameFrame++;
        gameCoordinateX++; 
    } else {
        cancelAnimationFrame(animate);
        pokeballAnimate();
    }
} 

function pokeballAnimate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let ballPosition = Math.floor(ballFrame/staggerBallFrames) % 8;
    let ballPositionX = Math.floor(ballGameCoordinateX/staggerBallFrames) % 8;
    let ballPositionY = Math.floor(ballGameCoordinateY/staggerBallFrames) % 8;
    let ballFrameX = 40 * ballPosition;
    let ballCoordinateX = -80 + (ballPositionX * 25);
    let ballCoordinateY = 20 + (ballPositionY * 5);
    ctx.drawImage(pokeballImage, ballFrameX, 0, 40, 50, ballCoordinateX, ballCoordinateY, 150, 150);
    requestAnimationFrame(pokeballAnimate);
    if (ballFrameX < 280) {
        ballFrame++;
        ballGameCoordinateX++;
        ballGameCoordinateY++;
    } else {
        cancelAnimationFrame(pokeballAnimate);
        if (variation == 1) {
            cyndaquilPokemon();
        } else if (variation == 2) {
            totodilePokemon();
        } else if (variation == 3) {
            chikoritaPokemon();
        }
    }
} 

function animateComputer(){
    ctx2.clearRect(0, 0, canvas2Width, canvas2Height);
    ctx2.drawImage(computerImage, computerCoordinateX, 0, 150, 150);
    requestAnimationFrame(animateComputer);
    if (computerCoordinateX < 270) {
        computerCoordinateX += 3;
    } else {
        cancelAnimationFrame(animateComputer);
        pokeballComputer();
    }
} 

function pokeballComputer() {
    ctx2.clearRect(0, 0, canvas2Width, canvas2Height);
    let ball2Position = Math.floor(ball2Frame/staggerBall2Frames) % 8;
    let ball2PositionX = Math.floor(ball2GameCoordinateX/staggerBall2Frames) % 8;
    let ball2PositionY = Math.floor(ball2GameCoordinateY/staggerBall2Frames) % 8;
    let ball2FrameX = 40 * ball2Position;
    let ball2CoordinateX = 280 - (ball2PositionX * 25);
    let ball2CoordinateY = -30 + (ball2PositionY * 5);
    ctx2.drawImage(computerPokeball, ball2FrameX, 0, 40, 50, ball2CoordinateX, ball2CoordinateY, 150, 150);
    requestAnimationFrame(pokeballComputer);
    if (ball2FrameX < 280) {
        ball2Frame++;
        ball2GameCoordinateX++;
        ball2GameCoordinateY++;
    } else {
        cancelAnimationFrame(pokeballComputer);
    }
}


function cyndaquilPokemon(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(cyndaquil, 70, 90, 150, 150);
    requestAnimationFrame(cyndaquilPokemon);
}

function totodilePokemon(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(totodile, 70, 90, 150, 150);
    requestAnimationFrame(totodilePokemon);
}

function chikoritaPokemon(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(chikorita, 70, 90, 150, 150);
    requestAnimationFrame(chikoritaPokemon);
}

function staticTrainer(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(playerImage, 0, 0, spriteWidth, 54, 0, 150, 150, 150);
    requestAnimationFrame(staticTrainer);
} 

function staticComputer(){
    ctx2.clearRect(0, 0, canvas2Width, canvas2Height);
    ctx2.drawImage(computerImage, 150, 0, 150, 150);
    requestAnimationFrame(staticComputer);
} 

staticTrainer();
staticComputer(); 


const battle = [fire, water, grass]


const professorText = document.querySelector('.professortext');

const dialogue = document.querySelector('#dialogue');

const typeChoice = document.querySelector('.pickyourpokemon');

function askName() {
    if (dialogue.textContent === "Got it!") {
        let newPlayer = prompt("What is your name?");
        if (newPlayer != null) {
            professorText.textContent =
            "Nice to meet you " + newPlayer + "!";
            dialogue.textContent = "Hello!";
        }
    } else if (dialogue.textContent === "Hello!") {
        professorText.textContent = 
        `Today, we'll be learning about basic types
        by playing a classic game of Rochambeau, but
        with a pokemon twist!`;
        dialogue.textContent = "Ok!";
    } else if (dialogue.textContent === "Ok!") {
        professorText.textContent =
        `The rules are simple. You select Fire, Water, 
        or Grass type. Upon selecting, we'll both throw
        our pokemon and see which has the type advantage.
        Best of 5 wins!`;
        dialogue.textContent = "Let's Play!";
    } else if (dialogue.textContent === "Let's Play!") {
        typeChoice.style.display = "flex";
        dialogue.style.display = "none";
        professorText.textContent = ``;
    }
}

dialogue.addEventListener('click', askName);


dialogue.addEventListener('click', explainRules);






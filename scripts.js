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
let staggerFrames = 7;

// Pokeball Variables
let ballFrame = 0;
let ballGameCoordinateX = 0;
let ballGameCoordinateY = 0;
let staggerBallFrames = 5;

// Computer Variables
let computerCoordinateX = 150;
let ball2Frame = 0;
let ball2GameCoordinateX = 0;
let ball2GameCoordinateY = 0;
let staggerBall2Frames = 5;

let trainerScore = 0;
let computerScore = 0;


const typeChoice = document.querySelector('.pickyourpokemon');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const grass = document.querySelector('#grass');
const returnPokemon = document.querySelector('#returnpokemon');
const rematch = document.querySelector('#playagain');

const battle = ["fire", "water", "grass"];
let variation = 0
let computerSelection = ""

fire.addEventListener('click', chooseFire);
water.addEventListener('click', chooseWater);
grass.addEventListener('click', chooseGrass);
returnPokemon.addEventListener('click', returnPoke);
rematch.addEventListener('click', playAgain)

function chooseFire() {
    animate();
    variation = 1;
    animateComputer();
    computerSelection = battle[Math.floor(Math.random()*battle.length)]
    returnPokemon.style.display = 'flex';
    typeChoice.style.display = 'none';
    trainerText.textContent = `Cyndaquil, I choose you!`
}

function chooseWater() {
    animate();
    variation = 2;
    animateComputer();
    computerSelection = battle[Math.floor(Math.random()*battle.length)]
    returnPokemon.style.display = 'flex';
    typeChoice.style.display = 'none';
    trainerText.textContent = `Totodile, I choose you!`
}

function chooseGrass() {
    animate();
    variation = 3
    animateComputer();
    computerSelection = battle[Math.floor(Math.random()*battle.length)]
    returnPokemon.style.display = 'flex';
    typeChoice.style.display = 'none';
    trainerText.textContent = `Chikorita, I choose you!`
}

function returnPoke() {
    returnPokemon.style.display = 'none';
    rematch.style.display = 'flex';
    cancelAnimationFrame(animate);
    cancelAnimationFrame(animateComputer);
    staticTrainer();
    staticComputer();
    staggerFrames += 10;
    staggerBallFrames += 5;
    staggerBall2Frames += 10;
    fireWaterGrass();
}

function playAgain() {
    if (trainerScore < 3 && computerScore < 3) {
        rematch.style.display = 'none';
        typeChoice.style.display = 'flex';
        game();
        frameX = 0;
        trainerCoordinateX = 0;
        spriteWidth = 70;
        gameFrame = 0;
        gameCoordinateX = 0;
        coordinateX = 0;
        ballFrame = 0;
        ballGameCoordinateX = 0;
        ballGameCoordinateY = 0;
        computerCoordinateX = 150;
        ball2Frame = 0;
        ball2GameCoordinateX = 0;
        ball2GameCoordinateY = 0;
    } else if (trainerScore == 3)  {
        trainerWin();
    } else if (computerScore == 3) {
        computerWin();
    }
}

function animate(){
    cancelAnimationFrame(staticTrainer);
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
        let ballPosition = Math.floor(ballFrame/staggerBallFrames) % 8;
        let ballPositionX = Math.floor(ballGameCoordinateX/staggerBallFrames) % 8;
        let ballPositionY = Math.floor(ballGameCoordinateY/staggerBallFrames) % 8;
        let ballFrameX = 40 * ballPosition;
        let ballCoordinateX = -80 + (ballPositionX * 25);
        let ballCoordinateY = 20 + (ballPositionY * 5);
        ctx.drawImage(pokeballImage, ballFrameX, 0, 40, 50, ballCoordinateX, ballCoordinateY, 150, 150);
        if (ballFrameX < 280) {
            ballFrame++;
            ballGameCoordinateX++;
            ballGameCoordinateY++;
        } else {
            if (variation == 1) {
                ctx.drawImage(cyndaquil, 70, 90, 150, 150);
            } else if (variation == 2) {
                ctx.drawImage(totodile, 70, 90, 150, 150);
            } else if (variation == 3) {
                ctx.drawImage(chikorita, 70, 90, 150, 150);
            }
        }
    }
} 

function animateComputer(){
    cancelAnimationFrame(staticComputer);
    ctx2.clearRect(0, 0, canvas2Width, canvas2Height);
    ctx2.drawImage(computerImage, computerCoordinateX, 0, 150, 150);
    requestAnimationFrame(animateComputer);
    if (computerCoordinateX < 270) {
        computerCoordinateX += 3;
    } else {
        let ball2Position = Math.floor(ball2Frame/staggerBall2Frames) % 8;
        let ball2PositionX = Math.floor(ball2GameCoordinateX/staggerBall2Frames) % 8;
        let ball2PositionY = Math.floor(ball2GameCoordinateY/staggerBall2Frames) % 8;
        let ball2FrameX = 40 * ball2Position;
        let ball2CoordinateX = 280 - (ball2PositionX * 25);
        let ball2CoordinateY = -30 + (ball2PositionY * 5);
        ctx2.drawImage(computerPokeball, ball2FrameX, 0, 40, 50, ball2CoordinateX, ball2CoordinateY, 150, 150);
        if (ball2FrameX < 280) {
            ball2Frame++;
            ball2GameCoordinateX++;
            ball2GameCoordinateY++;
        } else {
            if (computerSelection == "fire") {
                ctx2.drawImage(cyndaquil, 70, 90, 150, 150);
            } else if (computerSelection == "water") {
                ctx2.drawImage(totodile, 70, 90, 150, 150);
            } else if (computerSelection == "grass") {
                ctx2.drawImage(chikorita, 70, 90, 150, 150);
            } 
        }
    }
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

const trainerText = document.querySelector('.trainertext');
const professorText = document.querySelector('.professortext');
const dialogue = document.querySelector('#dialogue');

trainerText.textContent = "I'm finally 10 and ready to embark on my Pokemon Journey."

function askName() {
    if (trainerText.textContent == "I'm finally 10 and ready to embark on my Pokemon Journey.") {
        let newPlayer = prompt("What is your name?");
        if (newPlayer != null) {
            professorText.textContent =
            "Nice to meet you " + newPlayer + "!";
            trainerText.textContent = "Hello!";
        }
    } else if (trainerText.textContent === "Hello!") {
        professorText.textContent = 
        `Today, we'll be learning about basic types
        by playing a classic game of Rochambeau, but
        with a pokemon twist!`;
        trainerText.textContent = "Ok!";
    } else if (trainerText.textContent === "Ok!") {
        professorText.textContent =
        `The rules are simple. You select Fire, Water, 
        or Grass type. Upon selecting, we'll both throw
        our pokemon and see which has the type advantage.
        Best 3 out of 5 wins!`;
        trainerText.textContent = "Let's Play!";
    } else if (trainerText.textContent === "Let's Play!") {
        typeChoice.style.display = "flex";
        dialogue.style.display = "none";
        professorText.textContent = ``;
    }
}

dialogue.addEventListener('click', askName);

function fireWaterGrass() {
    if (variation === 1 && computerSelection === "grass") {
        professorText.textContent = `You win! Fire beats grass.`
        trainerText.textContent = `It's super effective!`
        ++trainerScore;
    } else if (variation === 2 && computerSelection === "fire") {
        professorText.textContent = `You win! Water beats fire.`
        trainerText.textContent = `It's super effective!`
        ++trainerScore;
    } else if (variation === 3 && computerSelection === "water") {
        professorText.textContent = `You win! Grass beats water.`
        trainerText.textContent = `It's super effective!`
        ++trainerScore;
    } else if (variation === 1 && computerSelection === "water") {
        professorText.textContent = `You lose! Water beats fire.`
        trainerText.textContent = `It's not very effective...`
        ++computerScore;
    } else if (variation === 2 && computerSelection === "grass") {
        professorText.textContent = `You lose! Grass beats water.` 
        trainerText.textContent = `It's not very effective...`
        ++computerScore;
    } else if (variation === 3 && computerSelection === "fire") {
        professorText.textContent =  `You lose! Fire beats grass.`
        trainerText.textContent = `It's not very effective...`
        ++computerScore;
    } else if (variation === 1 && computerSelection === "fire" 
    || variation === 2 && computerSelection === "water" 
    || variation === 3 && computerSelection === "grass" ) {
        trainerText.textContent = `What now professor?`
        professorText.textContent = `It's a tie!`
    } 
}

function game() {
    if (trainerText.textContent == `It's super effective!`) {
        professorText.textContent = `Your score is ${trainerScore}. Mine is ${computerScore}.
        Best 3 out of 5. Play again?`
    } else if (trainerText.textContent == `It's not very effective...`) {
        professorText.textContent = `Your score is ${trainerScore}. Mine is ${computerScore}.
        Best 3 out of 5. Play again?`
    } else if (trainerText.textContent == `What now professor?`) {
        professorText.textContent = `Your score is ${trainerScore}. Mine is ${computerScore}.
        Best 3 out of 5. Play again?`
    }
}

function trainerWin() {
    trainerText.textContent = `I knew I could do it!`
    professorText.textContent = `That all for today's lesson. You win!`
}

function computerWin() {
    trainerText.textContent = `Darn. Almost had it.`
    professorText.textContent = `We might need to practice more later. You lose!`
}



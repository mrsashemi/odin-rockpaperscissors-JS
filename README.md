The Odin Project - Javascript Rock, Paper, Scissors

Fri Jan 21 5:21
Today I'm working on yet another odin project...project! This time it's a game of Rock, Paper, Scissors simply done in the console. I've been practicing quite a bit so it was actually pretty simple. I started by trying to write the solution first on paper (algorithm) before jumping straight into the code. I wrote the following:

Create a constant rochambeau array containing the strings Rock, Paper, Scissors
Create a function rockPaperScissors with input variable x where x is a string
Create a variable computerSelection that randomly selects a string from our array and makes it upper case
Create a variable playerSelection that makes the input x upper case
If playerSelection equals ROCK and computerSelection equals SCISSORS return "You win! Rock beats scissors"
Repeat else if statement for winning combinations, losing combinations, and tie
For losing combinations and replace the return string with "You lose! computerSelection beats playerSelections"
For tie return "It's a tie!"
Else return "That's not how you play!" for any other input x

I intend on returning to the script to try and write it as a switch statement in the meantime. I also intend on returning to create a webpage and game out of it as opposed to just playing in the console. 

Fri Jan 21 10:22
Part 2! The next step of the project is to have the computer keep score and play a game out of 5. Using a for loop isn't necessary, but since I jumped ahead in my learning, I decided to give it a try. Here is the initial algorithm I wrote before tackling the challenge:

Create a function game that keeps score and contains function rockPaperScissors
Open a window prompt asking Rock, Paper, Scissors?
Input player's answer/move
Call the rockPaperScissors function with the player's input
Create a for loop to iterate through the score
Use if/else/switch to tally score
Prompt the player to play again each round and loop until 5 rounds are over
Alert with you win or you lose

The issue I ran into this time was with the scope of the for loop. I initially put the rockPaperScissors function outside of the loop, so even though I would get a new prompt everytime I input my move, the for loop would return a value at random. 

Fri Jan 28 2:55
Part 3. Now to make our Rock Paper Scissors game into a real page that can be played with buttons as opposed to a game played in the JS console. I wanted to challenge myself by adding a special twist and decided to make the game pokemon theme. The idea was to go with a simple type match up of fire, grass, and water– just how rock paper scissors is played, but to use sprite animations to give the game a little more spark. 

The first step was to learn how animations work in javascript. I had some experience with p5js for generative art, so I figured it wouldn't be too difficult. I didn't really know exactly where to start, so I started by making a simple guide of what would happen with the animation: 

create a canvas and an animation function
insert an image of a trainer using a sprite sheet
Crop selected trainer sprite and loop through frames to animate
Slide trainer off canvas and freeze animation
start new pokeball animation
repeat trainer animation steps for pokeball animation
freeze pokeball animation after thrown
display pokemon

I started by looking at a few tutorials for sprite animations and managed to work it out! Theres quit a few callbacks involved. I intend on returning to clean up my functions and further report my learnings here. 

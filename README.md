The Odin Project - Javascript Rock, Paper, Scissors

DISCLAIMER:
Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.

I do not own of the pokemon sprites used in this javascript project. The images and characters belong to the pokemon company and are only being used in this project for educational purposes. 

I do, however, own the background images. It is a piece of my original artwork with a picture of a clear switch layered and edited over using photoshop. 

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

Tue Feb 1 8:51
Spent the last few days going down a hole working out the animations into a pseudo-pokemon match. I wrote out this very basic step by step of how I wanted the page to function:

On page load, see two canvases with a pokemon trainer(user)    
    in one and a pokemon professor(computer) in the other.
Each canvas has a dialogue box, professor asks name
Prompt dialogue box asking for name
Professor introduces game, and asks to play
Upon gamestart, buttons appear for each type (fire, water, grass)
Play game of rochambeau with animations
Play best 3 out of 5
Ask to play again

For my first javascript project, this one was a challenge! I broke down the process into smaller steps, focusing first on the Javascript before moving onto styling the page:

1) focusing first on the javascript animations. 
   I found some spritesheets that would be ideal for this project, and started with a tutorial on how to animate them. The method is essentially to drawImage using all 9 parameters, and then isolate a single sprite into the canvas. From there you write a function that adjusts the sx parameter to change isolated sprite and then requestAnimationFrame.
   This on its own works but is too fast. I found a method to create a framerate. 
   
   Create a frame variable and a stagger variable
   Mouth round frame/stagger modulus #ofFrames
   sx = equation relating to proper amount to move the frames by

   Say I had 5 frames, and each frame is sx = 50 spaced apart. That would mean the first sprite is at 0, the next sprite is at 50, etc. Make sense, right? So to create a framerate, you set frame to lets say 0, and stagger to lets say 10. 
   
   By increasing the frame++ each time the function loops, you end up with math round = 0. Mouth round = 0 modulus lets say 5 is going to be 0 until frame = 10. At that point math round would be 1, and modulus would return 1 –> this keeps going spitting out repeats of the same number over however many stagger frames. 

   In this case, you then multiply that number by sx = 50, until you reach sx = 250. This essentially moves the sx much more slowly creating somewhat of a framerate. 

   I repeated these steps to get all the various animations working together. There were some hiccups in how things stiched but it ultimately worked out, namely I found the animation functions to run better when they werent split up into smaller functions. Everytime I split the functions up for the pokeball and trainer, I found the stagger frames for the pokeball were significantly higher (300 vs around 10). It seems the javascript would run the animation much too quickly whenever they were function call backs involved. I ran into a similar problem, when resetting the animation with function buttons to rerun it, but I was able to remedy it by adding to the stagger frames each time I reran the animation. 

   Since the spritesheets were not very clean and evenly spaced when I found them, I decided to cut out the sprites I needed to make it simpler to work with in drawImage() functions. It also meant I could adjust the spacing as needed to get a more consistent sx in the draw image.

2) focusing on text and buttons
    The biggest issue I ran into here was properly syncing the animation with the text and buttons, with some tinkering around I got it to work. I reused the code from the first iteration of this rock paper scissors game to get the randomization working for the computer. 

3) syncing the game
    Also reused code here from the first iteration! This was actually really challenging, as explained above, resetting each round caused issues with the animation. Upon remedying the animation, I ran into trouble properly keeping score. 

    I decided against using a loop this time– it caused the page to slow down too much so instead I used simple if statements and created two variables to keep score for the trainer and computer respectively. I then used if else statements. If the score wasn't 3 for either computer or trainer, the game reran. If it was 3, the game finished and the computer gave you the results.

4) stylizing page.
    Still working on this, so I will update again, but created some video game style buttons, gave the page a background using some original art, and overall went for a old school video game look. 
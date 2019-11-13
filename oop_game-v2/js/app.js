/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const button = document.querySelector('button');
let gameWon;
var letter;
 
 //app.js -create a new instance of the Game class
const game = new Game();


//add event listeners for the start button and onscreen keyboard buttons.
button.addEventListener('click',() => {  
    game.startGame();
});

//Add click event listeners to each of the onscreen keyboard buttons, so that clicking 
//a button calls the handleInteraction() method on the Game object. Event delegation 
//can also be used in order to avoid having to add an event listener to each individual 
//keyboard button. Clicking the space between and around the onscreen keyboard buttons 
//should not result in the handleInteraction() method being called.
//class is key in html


$('.key').click(function(event) { // if it has a class of 'key', we'll target the event 
    let key = event.target;  // key stores the button element (ex the letter you click) 
    game.handleInteraction(key)
    
})




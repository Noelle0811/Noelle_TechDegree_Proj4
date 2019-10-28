/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.querySelector('button');
let buttonKeyBoard = document.getElementsByClassName('.keyrow');
let key = document.getElementById('qwerty')
let gameWon;
var letter;

 
 //app.js -create a new instance of the Game class
let game = new Game();

game.startGame();

//add event listeners for the start button and onscreen keyboard buttons.
button.addEventListener("click", () => {   
game = new game;
    game.startGame();
    game.reset();
});

//Add click event listeners to each of the onscreen keyboard buttons, so that clicking 
//a button calls the handleInteraction() method on the Game object. Event delegation 
//can also be used in order to avoid having to add an event listener to each individual 
//keyboard button. Clicking the space between and around the onscreen keyboard buttons 
//should not result in the handleInteraction() method being called.
//class is key in html
$('.keyrow').click(function(event) {
    let key = event.target.innerHTML;
    //debugger;
    game.handleInteraction(key)
    //return (key)
})


//Add click event listeners to each of the onscreen keyboard buttons, 
//so that clicking a button calls the handleInteraction() method on the
// Game object.
$('button').click( () => {
    game.handleInteraction();
})


 //keys.forEach(key =>.addEventListener('click', (e) => game.handleInteraction(e.target)), false);
//console.log('');


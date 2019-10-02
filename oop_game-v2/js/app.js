/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn_reset');
const buttonKeyBoard = document.getElementsByClassName('.keyrow');



 //app.js -create a new instance of the Game class
 const game = new Game();
 game.startGame();

//add event listeners for the start button and onscreen keyboard buttons.
//btn_reset is id in html
$('#btn_reset').on('click',(event) => {
 game = new game;
 game.startGame();
 game.reset();

})

//Add click event listeners to each of the onscreen keyboard buttons, so that clicking 
//a button calls the handleInteraction() method on the Game object. Event delegation 
//can also be used in order to avoid having to add an event listener to each individual 
//keyboard button. Clicking the space between and around the onscreen keyboard buttons 
//should not result in the handleInteraction() method being called.
//class is key in html
$('.keyrow').click(function(event) {
    let key = event.target;
   // console.log(key);
    game.handleInteraction(key)
    return (key)
})


//Add click event listeners to each of the onscreen keyboard buttons, 
//so that clicking a button calls the handleInteraction() method on the
// Game object.
$('buttonkeyboard').click( () => {
    game.handleInteraction();
})



//console.log('Phrase ${index} - phrase: ${phrase.pharse}');
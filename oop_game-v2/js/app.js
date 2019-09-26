/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let buttonKey;
 //app.js -create a new instance of the Game class
 const game = new game();
 game.startGame();

//add event listeners for the start button and onscreen keyboard buttons.
$('#button_start').on('click',(event) => {
 game = new game;
 game.startGame();

})

$('button.keyboard').click(function(event) {
    buttonKey = event.target;
    return (capturedKey)
})


//Add click event listeners to each of the onscreen keyboard buttons, 
//so that clicking a button calls the handleInteraction() method on the
// Game object.
$('button.keyboard').click( () => {
    game.handlerInteraction();
})
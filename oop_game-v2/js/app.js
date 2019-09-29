/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let buttonKey;
 //app.js -create a new instance of the Game class
 const game = new Game();
 game.startGame();

//add event listeners for the start button and onscreen keyboard buttons.
//btn_reset is id in html
$('#btn_reset').on('click',(event) => {
 game = new game;
 game.startGame();

})
//class is key in html
$('.key').click(function(event) {
//game.handleInteraction(key)
    key = event.target;
    return (key)
})


//Add click event listeners to each of the onscreen keyboard buttons, 
//so that clicking a button calls the handleInteraction() method on the
// Game object.
$('button.keyboard').click( () => {
    game.handlerInteraction();
})



//console.log('Phrase ${index} - phrase: ${phrase.pharse}');
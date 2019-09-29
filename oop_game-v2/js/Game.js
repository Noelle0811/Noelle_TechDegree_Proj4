/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


//The class should include a constructor that initializes the following properties:
// missed, phrases & activePhrase, Array of phrases
 
class Game {
    constructor() {
    this.missed = 0;
    this.phrases = [
        new Phrase("We are the tigers"),
        new Phrase("Hakuna Matata"),
        new Phrase("To Infinity And Beyond"),
        new Phrase("Beauty Is Found Within"),
        new Phrase("Let It Go")
    ];
    this.activePhrase = null;
}

//startGame(): hides the start screen overlay, to show the buttons and phrases starts the 
//game with a random phrase id overlay in html
//adds phrase to the board by calling the addPhraseToDisplay() method on the active Phrase
//object. it holds the random phrase then creates a new one then displays it to the board
//holds the random phrase again and then will be false until all the letters are guessed 

startGame() {
    $("#overlay").hide(); 
    const randomPhrase = random.getRandomPhrases();
    random.pharses = new Phrase(randomPhrase);
    random.addPhraseToDisplay();
    this.activePharse = randomPhrase 
    wonGame = false;
};

//calls the getRandomPhrase() method, 
//and sets the activePhrase property with the chosen phrase
//picks a #, stores the phrases Array, acceses the name and picks a random phrase
getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * (this.phrases.length));
    return this.phrases[randomPhrase];
};


//handleInteraction(): this method controls most of the game logic. It checks to see 
//if the button clicked by the player matches a letter in the phrase
//and then directs the game based on a correct or incorrect guess.
//Disable the selected letter’s onscreen keyboard button.
//If the phrase does not include the guessed letter, add the wrong CSS class to the 
//selected letter's keyboard button and call the removeLife() method.
//If the phrase includes the guessed letter, add the chosen CSS class to the selected 
//letter's keyboard button, call the showMatchedLetter() method on the phrase, and then 
//call the checkForWin() method. If the player has won the game, also call the gameOver() method.
handleInteraction(button) {
   let $letterBox = ($('button').text());
    ($(button).prop('disabled', true));
    if (this.activePharse.checkLetterBox($letterBox)) {
        this.activePharse.showMatchedLetter(button.$letterBox)
        $(button).addClass('chosen');
    } else {
        $(button).addClass('wrong');
        this.removeLife();
    }
    if (this.checkForWin()) {
        this.gameOver();
    } 
};


//lose life when the user picks the wrong letter causing the blue hearts to turn gray
//if guessed 5 times then the game ends 
removeLife() {
    $('li.tries img').eq(this.lostHeart).attr('src', 'images/liveHeart.png');
    this.missed +=1;
    if(this.lostHeart == 5) {
        this.gameOver(false)
    }
};





//check for win
//checkForWin() {




//removeLife(){}

//resetGame(){

//gameOver(wonGame)

};
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


//The class should include a constructor that initializes the following properties:
// missed, phrases & activePhrase
 
class game {
    constructor() {
    this.missed = 0;
    this.phrases = [
        {phrase: "We are the tigers"}
        {phrase: "Hakuna Matata"}
        {phrase: "To Infinity And Beyond"}
        {phrase: "Beauty Is Found Within"}
        {phrase: "Let It Go"}
      ];
 this.activePhrase = null;
    }
}

//startGame(): hides the start screen overlay,
startGame() {
    $('#overlay').hide();
// It also adds that phrase 
//to the board by calling the addPhraseToDisplay() method on the active Phrase
//object. it holds the random phrase then creates aa new one then displays it to the board
//holds the random phrase again and then will be false until all the letters are guessed 
const gamejsPhrase = gamejs.getRandomPhrase()
    gamejsPhrase = new Phrase (gamejsPhrase);
    gamejs.phrase.addPhraseToDisplay()
    this.activePharse = gamejsPhrase 
    youWin = false;

};

//calls the getRandomPhrase() method, 
//and sets the activePhrase property with the chosen phrase
//picks a #, stores the phrases Array, acceses the name and picks a random phrase
getRandomPhrase() {
    const mainPhrase = this.phrases 
    let random = Math.floor(Math.random() * this.phrases.lenght)
    .map(phrase => phrase.name)
    return(mainPhrase[random]);
}



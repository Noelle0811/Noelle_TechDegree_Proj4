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
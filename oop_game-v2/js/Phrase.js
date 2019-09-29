/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



//id in html
//convert to all lower case 
class Phrase {
    constructor(phrase) {
        this.Phrase = phrase.toLowerCase();
    }
}

//addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. 
//Each letter is presented by an empty box, one li element for each letter. 
//places phrase into different arrays 
addPhraseToDisplay() {
    const addPhraseToDisplay = this.phrase
    const display = [...addPhraseToDisplay]
    const splitPhrase = this.phrase.split('');
    splitPhrase.forEach(letter => {
    const li = document.createElement('li');
    li.append(li);
    if(letter === '') {
        li.classList.add("hide space")
    } else {
        li.classList.add("hide letter") 
    }

});

}
//checks to see if the letter selected by the player matches a 
//letter in the phrase.
checkLetter(letter) {
    if (this.phrase.includes(letter)){
        return (true);
    } else {
        return (false);
    }

//reveals the letter(s) on the board that matches the player's selection. 
//To reveal the matching letter(s), select all of the letter DOM elements that have a 
//CSS class name that matches the selected letter and replace each selected element's hide CSS 
//class with the show CSS class.
showMatchedLetter(letter) {
  $('#pharse ul li').each(function() {
if ($(this).text() == letter) {
    $(this).attr('class', 'show');
   }
 });
}
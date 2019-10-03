/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



//id in html
//convert to all lower case 
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

//addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. 
//Each letter is presented by an empty box, one li element for each letter. 
//places phrase into different arrays 
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const splitPhrase = this.phrase.split('');
        
        splitPhrase.forEach(letter => {
            const li = document.createElement('li');
            ul.append(li);
            
            if(letter === '') {
                li.classList.add("space")
            } else {
                li.classList.add("letter") 
            }
        })
        
    };
    //debugger; 
//checks to see if the letter selected by the player matches a 
//letter in the phrase.
    checkLetter(keyValue) {
        let matchedLetter = false;
        
        this.phrase.split('')
        .forEach(letter => {                // need a defined value
        if (keyValue === matchedLetter) {
            matchedLetter = true;
        } else {
            return (false);
        }
    })
    };

//reveals the letter(s) on the board that matches the player's selection. 
//To reveal the matching letter(s), select all of the letter DOM elements that have a 
//CSS class name that matches the selected letter and replace each selected element's hide CSS 
//class with the show CSS class.
    showMatchedLetter(letter) {             // not being read
        const split = [...this.phrase]
        
        split.forEach(letter => {
            $('#phrase ul li').each(function() {
                if ($(this).text() === letter) {
                    $(this).attr('class', 'show');
                }
            });
        })
    }
}  // end of Phrase class
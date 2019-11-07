/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

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
            
            if(letter === ' ') {
                li.classList("space")
            } else {
                li.classList("letter") 
            }
        })
        
    };

//checks to see if the letter selected by the player matches a 
//letter in the phrase.
    checkLetter(keyValue) {
        let matchedLetter = false;
        this.phrase.split('')
        .forEach(letter => {                
        if (keyValue === letter) {
            matchedLetter = true;
       
        }
    })
     return matchedLetter;
    };

//reveals the letter(s) on the board that matches the player's selection. 
//To reveal the matching letter(s), select all of the letter DOM elements that have a 
//CSS class name that matches the selected letter and replace each selected element's hide CSS 
//class with the show CSS class.
    showMatchedLetter(letter) {             // not being read
        const split = [...this.phrase]
        
        split.forEach(letter => {
            if(key.innerHTML == letter) {
                let pLetter = document.querySelectorAll('#phrase li')
                for(let i = 0; i < pletter.length; i++) {
                    if(pLetter[i].textContent == letter) {
                        pLetter[i].addClass = 'show letter'
                    }
                }
            }
        })
    };
    
};    // end of Phrase class
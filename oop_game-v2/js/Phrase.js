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
        
        // creates li
        splitPhrase.forEach(letter => {
            const li = document.createElement('li');
            li.innerHTML = letter;
            ul.append(li);
            if(letter === ' ') {
                li.classList = 'space'
            } else {
                li.classList = 'letter' 
            }
        })
        
    };

//checks to see if the letter selected by the player matches a 
//letter in the phrase.
    checkLetter(key) {
        var keyValue = key.innerHTML;
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
    showMatchedLetter(key) {
       var keyValue = key.innerHTML; //storing the key in a value  
        const split = [...this.phrase] //going through all the letters 

        split.forEach(letter => {  //split = array
        
            if(keyValue === letter) { //users guess
            
                let pLetter = document.querySelectorAll('#phrase li')
                console.log(pLetter);
                for(let i = 0; i < pLetter.length; i++) { //to show match
                    if (pLetter[i].textContent === letter) { //if true
                        pLetter[i].classList = 'show'
                    
                    }
                }
            }
        })
    };
    
};    // end of Phrase class

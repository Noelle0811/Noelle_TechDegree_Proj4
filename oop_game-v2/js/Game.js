/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
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
    this.activePhrase = null; //This is the Phrase object that’s currently in play. The initial value is null.
    //console.log();
}


//startGame(): hides the start screen overlay, to show the buttons and phrases starts the 
//game with a random phrase id overlay in html
//adds phrase to the board by calling the addPhraseToDisplay() method on the active Phrase
//object. it holds the random phrase then creates a new one then displays it to the board
//holds the random phrase again and then will be false until all the letters are guessed 

startGame() {
    overlay.style.display = 'none'; 
    this.activePhrase = this.getRandomPhrase(); 
    this.activePhrase.addPhraseToDisplay();
};

//calls the getRandomPhrase() method, 
//and sets the activePhrase property with the chosen phrase
//picks a #, stores the phrases Array, acceses the name and picks a random phrase
getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * (this.phrases.length));
    const phrase = this.phrases[randomPhrase]
    return phrase;
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
   if(event.type === 'click') {
       button.disabled = true;
    } else {
        $(button).addClass('wrong');
        this.removeLife();
    }
    if (this.checkForWin()=== true) {
        this.gameOver(true);
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


//check for win this method checks to see if the player has revealed all of the letters in the active phrase.
checkForWin() {
    const allLetters = document.querySelectorAll('.letter').length;
    const letterActive =document.querySelectorAll('.show').length;
        if(letterActive === allLetters ) {
            return true 
        } else {
            return false
        }
    }


//this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png
//and increments the 'missed' property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
removeLife(){
    const liveHeart = document.getElementsByClassName('img');
    liveHeart[this.missed].src ="images/lostHeart.png";
    liveHeart[this.missed].alt = "Lost img"
    this.missed +=1;
    if (this.missed === 5) {
        this.gameOver(false);
        this.reset();
    }
}


// this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay 
//h1 element with a friendly win or loss message,and replaces the overlay’s start CSS class with either the win or lose CSS class and will reset
gameOver(wonGame) {
    const messageShow = document.querySelector('#game-over-message');
    ($('#overlay')).show();
        if (wonGame == true) {
            messageShow.textContent = 'You Won The Game!!';
            overlay.removeClass('lose');
            overlay.addClass.add('won');
        } else {
            messageShow.textContent = 'Sorry, You Lost.';
            overlay.addClass.removeClass('won');
            overlay.addClass.add('lose');
        }

        $('#overlay').show();

        //game and lives resetting
        for (let i = 0; i < $('#score li img').length; i++) {
            $('#liveHeart li img')[i].src ='images/liveHeart.png';
        }
        
    }



}

//After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
//Remove all li elements from the Phrase ul element.
//Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
//Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.

// resetGame() {} //reset all buttons
$('.keyrow button').removeClass('picked');
$('.keyrow button').removeClass('wrong');
$('.keyrow button').addClass('key');
    for (let i = 0; i < ($('.keyrow button')).length; i++ {
        $('.keyrow button')[i].disabled = false;
    }


//};
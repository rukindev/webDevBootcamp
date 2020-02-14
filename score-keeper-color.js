
// ****Score Keeper Project

// Select buttons elements
let p1Button = document.querySelector('#p1');
let p2Button = document.querySelector('#p2');
let resetButton = document.querySelector(".buttonReset");

// Select <h1> Score Elements
let p1Display = document.querySelector('.displayP1');
let p2Display = document.querySelector('.displayP2');

// Select input
let numInput = document.querySelector('input');

// variable that keep track of the total number of winnings a player has to have.
let winScoreDisplay = document.querySelector('.scoreTo');

// Variable score to link button to score increase
let p1Score = 0;
let p2Score = 0;

// Variable to keep track of the state of the game: 1st we can play forever. 2nd state is over.
let gameOver = false;

// Variable to compare if gets to maximum points - Game Over
let winScore = 3;

// Event listener player1
p1Button.addEventListener('click', function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winScore){
            displayP1.classList.add('winner');
            document.body.classList.toggle('classTwo');
            gameOver = true;
        }
        displayP1.textContent = p1Score;
    }
});
// Event listener player2
p2Button.addEventListener('click', function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winScore){
            displayP2.classList.add('winner');
            document.body.classList.toggle('classTwo');
            gameOver = true;
        }
        displayP2.textContent = p2Score;
    }
});

// Reset Button calls function reset when clicked
resetButton.addEventListener('click', function(){
    reset();
});

// function reset setup
function reset(){
    // variable p1Score and p2Score back to zero
    p1Score = 0;
    p2Score = 0;
    // Displays value back to zero
    displayP1.textContent = 0;
    displayP2.textContent = 0;
    // Remove color class back to original color
    displayP1.classList.remove('winner');
    displayP2.classList.remove('winner');
    // gameover back to false value;
    gameOver = false;
}

// Use "change" event instead of "click" because it will run anytime the value changes.
numInput.addEventListener("change", function(){
    // value extracts its value from input and convert it to a number/ This keyword in this case is listening to "numInput"
    winScoreDisplay.textContent = this.value;
    winScore = Number(this.value);
    reset();
});



// ****Color Changer****

// select element
let button = document.querySelector('.colorButton');

// setup
button.addEventListener('click', function(){
    document.body.classList.toggle('classTwo');
});
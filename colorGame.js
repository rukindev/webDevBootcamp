let numSquares = 6;
let colors = [];
let focusColor;

// Selectors
let squares = document.querySelectorAll('.square');
let displayColor = document.querySelector('#displayColor');
let displayTextMessage = document.querySelector('#message')
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    // loop through modeButtons - mode buttons event listeners
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            // determine mode level
            // Conditional (ternary) operator - reading: if(this.textContent === "Easy") than(?) numSquares = 3 otherwise (:) numSquares = 6
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if (this.textContent === "Hard"){
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            // call reset function
            reset();
         });
    }
}

resetButton.addEventListener("click", function(){
    reset();
});

// function to use in a few places.
function reset(){
    // generate all new colors
    colors = generateRandonColors(numSquares);
    // pick a new random color
    focusColor = pickColor();
    // change display Color to match focusColor
    displayColor.textContent = focusColor;
    // change backgroundColor of the h1
    h1.style.backgroundColor = "rgb(245, 77, 77)";
    // button text back to = New Colors
    resetButton.textContent = "New Colors";
    // turn display back to none
    displayTextMessage.textContent = "";
    // change colors of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgb(245, 77, 77)";
    resetButton.textContent = "New Colors";
    displayTextMessage.textContent = "";
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color for each square and save it to a var
            let clickedColor = this.style.backgroundColor;
            // compare color to focusColor
            if(clickedColor === focusColor){
                displayTextMessage.style.color = focusColor;
                displayTextMessage.textContent = 'Right Pick!!';
                resetButton.textContent = "Play Again";
                changeColor(clickedColor);
                h1.style.backgroundColor = focusColor;
            } else {
                displayTextMessage.style.color = "rgb(245, 77, 77)";
                this.style.backgroundColor = '#232323';
                displayTextMessage.textContent = 'Try Again';
            }
        });
    }
}

    function changeColor(color){
        // loop through all squares
        for(let i= 0; i < squares.length; i++){
            // change each color to match given color
            squares[i].style.backgroundColor = focusColor;
        }
    }

    function pickColor(){
        // Pick Random number to access the array color and return that color
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandonColors(num){
        // make an array and repeat num times
        let arr = [];
        for(let i = 0 ; i < num ; i++){
        // get random color and push into arr
            arr.push(randomColor())
        }
        return arr;
    }

    function randomColor(){
        // pick a red from 0 - 255
        let r = Math.floor(Math.random() * 256);
        // pick a green from 0 - 255
        let g = Math.floor(Math.random() * 256);
        // pick a blue from 0 - 255
        let b = Math.floor(Math.random() * 256);
        return 'rgb('+ r +', '+ g +', '+ b + ')';
    }

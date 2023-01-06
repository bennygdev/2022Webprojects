let tiles = document.querySelectorAll('.tile');
const winnerText = document.getElementById('winnerText');
const restartButton = document.getElementById('restartButton');
const resetButton = document.getElementById('resetButton');
const playersTurn = document.getElementById('playersTurn');
const xScoreDisplay = document.getElementById('xScore');
const oScoreDisplay = document.getElementById('oScore');
tiles = Array.from(tiles); //turn the tiles div into an array

let xScore = 0;
let oScore = 0;

// starting player will be x
let currentPlayer = "X";

// all possible winning patterns for a tic tac toe game
let winningPattern = [
    [0, 1, 2],
    [3, 4 ,5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// loops through every possible pattern, and check if the current player's mark has the correct patter, if it is then the game ends
function CheckWinningPattern() {
    let hasWon = false;
    winningPattern.forEach(function(pattern) {
        let check = pattern.every(index => tiles[index].innerText.trim() == currentPlayer);
        if(check) {
            highlightTiles(pattern);
            winnerText.innerHTML = `${currentPlayer} has won`
            if (currentPlayer === "X") {
                xScore++;
                xScoreDisplay.innerText = xScore;
            } else {
                oScore++;
                oScoreDisplay.innerText = oScore;
            }
            hasWon = true;
        }
    })
    if (!hasWon) {
        let isGameTied = true;
        winningPattern.forEach(function(pattern) {
            // check if the game is tied
            let isTileEmpty = pattern.some(index => tiles[index].innerText.trim() == "");
            if (isTileEmpty) {
                isGameTied = false;
            }
        })
        if (isGameTied) {
            winnerText.innerHTML = "Game Tied";
        }
    }
}

// uses theh foreach function to loop through pattern and tile to find the winning pattern and highlight it
function highlightTiles(pattern) {
    pattern.forEach(function(index) {
        tiles[index].classList.add('highlight');
    })
}

tiles.forEach(function(tile) {
    tile.addEventListener('click', function() {
        if(winnerText.innerHTML != "") return
        if(tile.innerText.trim() != "") return // means if the tile is not empty the user should be able to place X or O on the empty tile
        tile.innerText = currentPlayer;
        CheckWinningPattern();
        currentPlayer =  currentPlayer == "X" ? "O" : "X"; // checks if the current is previously X, if it is X then switch to O
        playersTurn.innerText = currentPlayer;
    })
})

restartButton.addEventListener('click', function() {
    // reset the game here
    tiles.forEach(function(tile) {
        tile.innerText = ""; // clear the tile's text
        tile.classList.remove('highlight'); // remove the highlight class if it exists
    });
    // currentPlayer = "X"; // set the starting player back to X
    // winnerText.innerHTML = ""; // clear the winner text
    // playersTurn.innerText = "X";
    if (winnerText.innerHTML === "X has won") {
        currentPlayer = "X";
        playersTurn.innerText = "X";
    } else if (winnerText.innerHTML === "O has won") {
        currentPlayer = "O";
        playersTurn.innerText = "O";
    } else {
        currentPlayer = "X";
        playersTurn.innerText = "X";
    }
    winnerText.innerHTML = ""; // clear the winner text
})

resetButton.addEventListener('click', function() {
    // reset the game here
    tiles.forEach(function(tile) {
        tile.innerText = ""; // clear the tile's text
        tile.classList.remove('highlight'); // remove the highlight class if it exists
    });
    currentPlayer = "X"; // set the starting player back to X
    winnerText.innerHTML = ""; // clear the winner text
    playersTurn.innerText = "X";

    // another function for reset is to reset the scores as well
    xScore = 0;
    oScore = 0;
    xScoreDisplay.innerText = xScore;
    oScoreDisplay.innerText = oScore;
})

// light and dark mode
const lightDarkBtn = document.getElementById('lightdarkBtn')
let icon = document.getElementById('icon');

lightDarkBtn.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.innerHTML = `<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>`
      lightDarkBtn.style.backgroundColor = "#FFFFFF";
    } else {
        icon.innerHTML = `<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </svg>`
      lightDarkBtn.style.backgroundColor = "#d6d6d6";
    }
}

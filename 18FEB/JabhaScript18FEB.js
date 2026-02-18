let divs = document.querySelectorAll('#parent div');
let player1 = '❌' , player2 = '〇' , turn = 0;
let winningMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let player1Moves = [];
let player2Moves = [];
function checkWinner()
{
    let currentPlayerMoves = turn === 0 ? player1Moves : player2Moves;    if (player1Moves.length + player2Moves.length === 9 && !winningMoves.some(wm => wm.every(m => currentPlayerMoves.includes(m)))) {
        alert("It's a Draw!");
        gameOver = true;
        location.reload();
        return false;
    }

    return winningMoves.some(wm => {
        return wm.every(m => currentPlayerMoves.includes(m));
    });
}

let gameOver = false;

divs.forEach((div, index) => {
    div.addEventListener('click', () => {
        if (div.innerText || gameOver) {
            return;
        }

        if(turn == 0) {
            div.innerText = player1;
            player1Moves.push([...divs].indexOf(div) + 1);
            if(checkWinner()) {
                alert("Player 1 Wins!");
                gameOver = true;
                location.reload();
                return;
            }
            turn = 1;
        }
        else {
            div.innerText = player2;
            player2Moves.push([...divs].indexOf(div) + 1);
            if(checkWinner()) {
                alert("Player 2 Wins!");
                gameOver = true;
                location.reload();
                return;
            }
            turn = 0;
        }
    });
});
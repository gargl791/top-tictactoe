function Cell() {
    // This token will represent a player object corresponding to placed token.
    let token = 0;

    function getToken() {
        return token;
    };

    function setToken(player) {
        token = player; 
    };

    return {getToken, setToken};
}

function GameBoard() {  

    //Creates the 2d array tic-tac-toe game board.
    let gameBoard = [[],[],[]];
    for(let r = 0; r < gameBoard.length; r++){
        for(let c = 0; c < 3; c++){
            gameBoard[r].push(Cell())
        }
    }
    console.log({gameBoard});

    function getGameBoard() {
        return gameBoard;
    };

    function updateCell(player, row, column){
        let cell = gameBoard[row][column];
        //When the cell's token is not 0, it means the position is already taken.
        if(cell.getToken() !== 0) {
            return;
        }
        cell.setToken(player);
    };

    return {getGameBoard, updateCell};  
    
}

function Player(name, token) {
    
    this.name = name;
    this.token = token;

    function getPlayerName() {
        return this.name;
    }

    function getPlayerToken() {
        return this.token;
    }

    function setPlayerName(name) {
        this.name = name;
    }

    function getPlayerToken(token) {
        this.token = token;
    }

}

//This function controls the flow of the game, initializes by setting the player's names.
function GameController() {

    const board = GameBoard();

    const players = [ Player("Player One", 1), Player("Player Two", 2)]
    const activePlayer = players[0];

    function changePlayerTurn(){
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    //using the indexes of the 2d array from 0 - 8. summing the indexes by player token % 3 == 0 means a win
    function checkGameStatus(activePlayer){
        let points = 0;
        let currentCell;
        let availablePositions = 0;
        let currentState = gameBoard.getGameBoard();
        for(let r=0; r < gameBoard.length; r++){
            for(let c=0; c<gameBoard[r].length; c++){
                if(currentCell.getToken() !== 0) {
                    availablePositions++;
                }
                if(currentCell.getToken === activePlayer.getToken()) {
                    if (r === 0) {
                        points += c;
                    }
                    else {
                        points += (r * c);
                    }
                }
            }
        }
        //This outcome means a draw.
        if(availablePositions === 9 && points % 3 !== 0) {
            console.log("Tie - No one wins");
        } 
        else if(points % 3 === 0) {
            console.log(`${activePlayer} wins`)
        }
    };

    function nextGame() {

    };
}



GameBoard();

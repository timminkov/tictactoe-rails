function Board() {
  var data = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  this.data = function() {
    return data;
  }

  this.setData = function(boardData) {
    data = boardData;
  }

  this.place = function(piece, space) {
    data[space] = piece;
  }

  this.isEmptySpace = function(space) {
    if (data[space] === ' ') {
      return true;
    }

    return false
  }

  this.isGameOver = function() {
    if (!this.gameStatus() === false) { return true }
    return false;
  }

  this.gameStatus = function() {
    var checkEmptyArray = [];
    for (space = 0; space < data.length; space++) {
      if (data[space]  === 'X' || data[space] === 'O') {
        checkEmptyArray.push(space);
      } 
    }

    if (this.winner()) { return 'won'; }
    if (checkEmptyArray.length == 9) { return 'tie'; } 

    return false;
  }

  this.winner = function() {
    var winners = this.winningCombos();
    for (space = 0; space < winners.length; space++) {
      if (this.isMatch(data[winners[space][0]], data[winners[space][1]], data[winners[space][2]])) { return data[winners[space][0]]; } 
    }
    return false;
  }

  this.isMatch = function(move1, move2, move3) {
    if (move1 === ' ' && move2 === ' ' && move3 === ' ') { return false; }
    if (move1 === move2 && move2 === move3) { return true; }
    return false;
  }

  this.children = function(player) {
    var children = [];
    for (var space = 0; space < 9; space++) {
      var tempData = data.slice(0);
      if (data[space] === ' ') {
        tempData[space] = player; 
        var tempBoard = new Board();
        tempBoard.setData(tempData); 
        children.push(tempBoard);
      } 
    } 
    return children;
  }

  this.winningCombos = function() {
    var winningCombos =
      [[0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]];

    return winningCombos;
  }
}

function Minimax() {
  var player = 'O';

  this.player = function() {
    return player;
  }

  this.setPlayer = function(anotherPlayer) {
    player = anotherPlayer;
  }

  this.nextTurn = function(tempPlayer) {
    if (tempPlayer === 'O') { return 'X'; }
    else { return 'O'; }
  }

  this.score = function(board) {
    if (board.winner() === player) { return 1; }
    if (board.gameStatus() === 'tie') { return 0; }
    if (!(board.winner() === player) && !(board.gameStatus() === 'tie')) { return -1; }
  } 

  this.minimax = function(board, tempPlayer) {
    if (board.isGameOver()) { return this.score(board); }

    var children = board.children(tempPlayer);
    var scores = [];
    for (var index = 0; index < children.length; index++) {
      scores.push(this.minimax(children[index], this.nextTurn(tempPlayer)));
    }
    
    if (tempPlayer === player) { return Math.max.apply(Math, scores); }
    return Math.min.apply(Math, scores);
  }
}

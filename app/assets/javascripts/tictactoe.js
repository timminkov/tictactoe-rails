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
    var checkEmptyArray = [];
    for (space = 0; space < data.length; space++) {
      if (data[space]  === 'X' || data[space] === 'O') {
        checkEmptyArray.push(space);
      } 
    }

    if (checkEmptyArray.length == 9) {
      return true; 
    }
    return false;
  }

  this.isWinner = function() {
    var winners = this.winningCombos()
    for (space = 0; space < winners.length; space++) {
      if (this.isMatch(data[winners[space][0]], data[winners[space][1]], data[winners[space][2]])) { return true; } 
    }
    return false;
  }

  this.isMatch = function(move1, move2, move3) {
    if (move1 === ' ' && move2 === ' ' && move3 === ' ') { return false; }
    if (move1 === move2 && move2 === move3) { return true; }
    return false;
  }

  this.children = function() {
    var children = [];
    for (var space = 0; space < 9; space++) {
      var tempData = data.slice(0);
      if (data[space] === ' ') {
        tempData[space] = 'O'; 
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

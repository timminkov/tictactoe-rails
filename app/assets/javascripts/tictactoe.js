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
      if ((data[space]  === 'X') || (data[space] === 'O')) {
        checkEmptyArray.push(space);
      } 
    }

    if (checkEmptyArray.length == 9) {
      return true; 
    }
    return false;
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

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

function Game() {
  var board, minimax;

  this.start = function() {
    board = new Board();
    minimax = new Minimax('O');
  }

  this.place = function(move, piece) {
    board.place(move, piece);
  }

  this.cpuTurn = function() {
    children = board.children('O');
    var counter = -2;
    var maxedBoard = new Board();
    for (var index = 0; index < children.length; index++) {
      if (minimax.minimax(children[index], 'X') >= counter) {
        counter = minimax.minimax(children[index], 'X');
        var maxedBoard = new Board();
        maxedBoard.setData(children[index].data());
      } 
    }
    board.setData(maxedBoard.data());
  }

  this.drawBoard = function() {
      var theBoard = board.data();

      $("table td").each(function(index) {
        var space = $(this).find('.placement').first();
        space.text(theBoard[index]);
      });  
  }
}

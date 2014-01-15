$(document).ready(function() {
  var board = new Board();
  var minimax = new Minimax();
  minimax.setPlayer('O');

  $('.button').on('click', function() {
    drawBoard();
    var move = $(this).data('space');
    var space = $(this).children('.placement').first().text();
    if (space === ' ') {
      board.place('X', move);

      children = board.children('O');
      var counter = -2;
      var maxedBoard = new Board();
      for (var index = 0; index < children.length; index++ ) {
        if (minimax.minimax(children[index], 'O') > counter) {
          counter = minimax.minimax(children[index], 'X');
          var maxedBoard = new Board();
          maxedBoard.setData(children[index].data());
        } 
      }

      board.setData(maxedBoard.data());
    
      drawBoard();
    } 
  });

  function drawBoard() {
    var theBoard = board.data();

    $("table td").each(function(index) {
      var space = $(this).find('.placement').first();
      space.text(theBoard[index]);
    });  
  } 

  function otherPlayer(player) {
    if (player === 'X') { return 'O'; }
    else { return 'X'; }
  }
});

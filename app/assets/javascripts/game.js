$(document).ready(function() {
  var board = new Board();
  var minimax = new Minimax();

  $('.button').on('click', function() {
    var move = $(this).data('space');
    board.place('X', move);

    children = board.children('O');
    var counter = -2;
    var maxedBoard = new Board();
    for (var index = 0; index < children.length; index++ ) {
      if (minimax.minimax(children[index], 'O') > counter) {
        counter = minimax.minimax(children[index], 'O');
        var maxedBoard = new Board();
        maxedBoard.setData(children[index].data());
      } 
    }

    board.setData(maxedBoard.data());
  
    drawBoard();
  });

  function drawBoard() {
    var theBoard = board.data();

    $("table td").each(function(index) {
      var space = $(this).find('.placement').first();
      space.text(theBoard[index]);
    });  
  } 
});

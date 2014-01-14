$(document).ready(function() {
  var board = new Board();
  var minimax = new Minimax();

  $('.button').on('click', function() {
    var move = $(this).data('space');
    board.place('X', move);
  
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

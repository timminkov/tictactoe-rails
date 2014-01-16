var game = new Game();
game.start();

$(document).ready(function() {
  $('.button').on('click', function() {
    game.drawBoard();
    var move = $(this).data('space');
    var space = $(this).children('.placement').first().text();
    if (space === ' ') {
      game.place('X', move);
      game.cpuTurn();
      
      game.drawBoard();
    } 
  });
});

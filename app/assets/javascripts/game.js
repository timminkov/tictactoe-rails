$(document).ready(function() {
  $('.button').on('click', function(e) {
    e.preventDefault();

    var move = $(this).data('space');

    $.ajax({
      url: '/tictactoe/move',
      type: 'POST',
      data: {move: move},
      success: function(gameData) {
                  
      }
    });

  });
});

$(document).ready(function() {
  $('.button').on('click', function() {

    var move = $(this).data('space');

    $.ajax({
      url: '/move',
      type: 'POST',
      data: {move: move},
      success: function(gameData) {
                  
      }
    });

  });
});

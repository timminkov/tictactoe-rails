function Board() {
  var data = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  this.data = function() {
    return data;
  }

  this.place = function(piece, space) {
    data[space] = piece;
  }
}

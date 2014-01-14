function Board() {
  var data = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  this.data = function() {
    return data;
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
}

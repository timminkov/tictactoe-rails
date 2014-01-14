describe("board", function() {
  var board;
  
  beforeEach(function() {
    board = new Board();
  });

  it("gets created with empty data", function() {
    var emptyArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    expect(board.data()).toEqual(emptyArray);
  });

  describe("placing pieces", function() {
    it("inserts an X into position 0 when given X, 0", function() {
      var firstMoveBoard = ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      board.place('X', 0);

      expect(board.data()).toEqual(firstMoveBoard);
    }); 

    it("inserts an X into position 1 when given X, 1", function() {
      var firstMoveBoard = [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      board.place('X', 1);

      expect(board.data()).toEqual(firstMoveBoard);
    });
  });
});

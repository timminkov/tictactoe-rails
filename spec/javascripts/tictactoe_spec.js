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

    it("inserts an O into position 2 when given O, 2", function() {
      var firstMoveBoard = [' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' '];
      board.place('O', 2);
  
      expect(board.data()).toEqual(firstMoveBoard);
    });
  });

  describe("checking for an empty place", function() {
    it("returns true when empty space is checked", function() {
      expect(board.isEmptySpace(0)).toEqual(true);
    });

    it("returns false when checked space is not empty", function() {
      board.place('X', 0);

      expect(board.isEmptySpace(0)).toEqual(false);
  
    });
  });
});

describe("player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe("taking a turn", function() {
  });
});

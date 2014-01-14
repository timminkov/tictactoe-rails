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

  describe("checking for a game over", function() {
    it("returns false if no moves have been made", function() {
      expect(board.isGameOver()).toBe(false);
    });

    it("returns true if the board is full", function() {
      fullBoard = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X'];
      board.setData(fullBoard);
      
      expect(board.isGameOver()).toBe(true);
    });

    it("returns true if there's a set of three", function () {
     
    });
  });

  describe("check for a set of 3", function() {

  });

  describe("winning combos", function() {
    it("should return all the possible winning combinations", function() {
      var winningCombos = 
        [[0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]];

      expect(board.winningCombos()).toEqual(winningCombos);
    });
  });
});

describe("minimax", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe("taking a turn", function() {
  });
});

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
    it("returns false when the game is not over", function() {
      var incompleteBoard = ['O', 'X', 'O', ' ', ' ', ' ', ' ', ' ', ' '];
      board.setData(incompleteBoard);
      
      expect(board.isGameOver()).toBe(false);
    });
  });

  describe("checking for game status", function() {
    it("returns false if no moves have been made", function() {
      expect(board.gameStatus()).toBe(false);
    });

    it("returns true if the board is full", function() {
      fullBoard = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X'];
      board.setData(fullBoard);
      
      expect(board.gameStatus()).toBe('tie');
    });

    it("returns true if there's a set of three", function () {
      winnerBoard = ['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' '];
      board.setData(winnerBoard);
  
      expect(board.gameStatus()).toBe('won'); 
    });
  });

  describe("check if three vars are the same", function() {
    it("returns true if given X X X", function() {
      expect(board.isMatch('X', 'X', 'X')).toBe(true);
    }); 

    it("returns false if given O X O", function() {
      expect(board.isMatch('O', 'X', 'O')).toBe(false);
    });

    it("returns false if given empty spaces", function() {
      expect(board.isMatch(' ', ' ', ' ')).toBe(false);
    });
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

  describe("checking for a winner", function() {
    it("should return X for a board with a winner X", function() {
      var boardWithWinnerX = ['X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ']; 
      board.setData(boardWithWinnerX);

      expect(board.winner()).toBe('X'); 
    });

    it("should return false for a board with no winner", function() {
      var boardWithoutWinner = [' ', 'O', 'X', ' ', ' ', ' ', ' ', ' ', ' '];
      board.setData(boardWithoutWinner);

      expect(board.winner()).toBe(false);
    });

    it("should return O for a board with a winner O", function() {
      var boardWithWinnerO = ['O', 'O', 'O', ' ', ' ', ' ', ' ', ' ', ' ']; 
      board.setData(boardWithWinnerO);

      expect(board.winner()).toBe('O');
    }); 
  });

  describe("getting the board children", function() {
    it("returns an array with next possible moves", function() {
      var someBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', ' ', ' '];
      board.setData(someBoard);

      var child1 = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', ' '];
      var child2 = ['X', 'O', 'X', 'O', 'X', 'O', 'X', ' ', 'O']; 
      var children = board.children('O');

      expect(children.length).toEqual(2);
      expect(children[0].data()).toEqual(child1);
      expect(children[1].data()).toEqual(child2);
    }); 
  });
});

describe("minimax", function() {
  var minimax, board;

  beforeEach(function() {
    minimax = new Minimax();
    board = new Board();
  });
  
  describe("scoring the board", function() {
    it("returns 1 if current player won", function() {
      var cpuWin = ['O', 'O', 'O', ' ', ' ', ' ', ' ', ' ', ' '];
      board.setData(cpuWin);

      expect(minimax.score(board, 'O')).toBe(1);
    });

    it("returns 0 if board is a tie", function() {
      var tie = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'];
      board.setData(tie);

      expect(minimax.score(board)).toBe(0);
    });

    it("returns -1 if board is a loss for current player", function() {
      var cpuLoss = ['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' ']; 
      board.setData(cpuLoss);

      expect(minimax.score(board, 'O')).toBe(-1);
    });
  });

  describe("minimaxing the board", function() {
    it("", function() {
    
    });
  });
});

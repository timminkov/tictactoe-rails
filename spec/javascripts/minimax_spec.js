describe("minimax", function() {
  var minimax, board;

  beforeEach(function() {
    minimax = new Minimax();
    minimax.setPlayer('O');
    board = new Board();
  });
  
  describe("scoring the board", function() {
    it("returns 1 if current player won", function() {
      var cpuWin = ['O', 'O', 'O',
                    ' ', ' ', ' ',
                    ' ', ' ', ' '];
      board.setData(cpuWin);

      expect(minimax.score(board)).toBe(1);
    });

    it("returns 0 if board is a tie", function() {
      var tie = ['X', 'X', 'O',
                 'O', 'O', 'X',
                 'X', 'O', 'X'];
      board.setData(tie);

      expect(minimax.score(board)).toBe(0);
    });

    it("returns -1 if board is a loss for current player", function() {
      var cpuLoss = ['X', 'X', 'X',
                     'O', 'O', ' ',
                     ' ', ' ', ' ']; 
      board.setData(cpuLoss);

      expect(minimax.score(board)).toBe(-1);
    });
  });

  describe("minimaxing the board", function() {
    it("should be -1 if the board is a loss", function() {
      var boardArray = ['X', 'X', 'X',
                        ' ', ' ', ' ',
                        ' ', ' ', ' '];
      board.setData(boardArray);

      expect(minimax.minimax(board, 'X')).toBe(-1); 
    });

    it("returns -1 if you lose no matter what in 2 turns", function() {
      var boardArray = [' ','X',' ',
                        'O','X','O',
                        'X','O','X'];
      board.setData(boardArray);

      expect(minimax.minimax(board, 'O')).toBe(-1);
    });

    it("returns 0 if you tie next turn", function() {
      var boardArray = ['X','O','X',
                        'X','O','O',
                        'O','X',' '];
      board.setData(boardArray);

      expect(minimax.minimax(board, 'O')).toBe(0);
    });

    it("returns a 1 if you can win next turn", function() {
      var boardArray = ['O','X','O',
                        'X','X','O',
                        'X',' ',' '];
      board.setData(boardArray);

      expect(minimax.minimax(board, 'O')).toBe(1);
    });

    it("returns 1 if your opponent will lose no matter what", function() {
      var boardArray = [' ','O',' ',
                        'O','X','O',
                        'X','O',' '];
      board.setData(boardArray);
      
      expect(minimax.minimax(board, 'O')).toBe(1);
    });

    it("returns 1 if you can win next turn", function() {
      var boardArray = ['X',' ',' ',
                        'O','O',' ',
                        'X',' ',' '];
      board.setData(boardArray);

      expect(minimax.minimax(board, 'O')).toBe(1);
    });
  });
});

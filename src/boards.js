// src/board.js
class Board {
    constructor() {
      this.grid = Array(5).fill(null).map(() => Array(5).fill(null));
      this.initialize();
    }
  
    initialize() {
      // Initial positions of Tigers
      this.grid[0][0] = 'T';
      this.grid[0][4] = 'T';
      this.grid[4][0] = 'T';
      this.grid[4][4] = 'T';
      this.goatsPlaced = 0;
    }
  
    getState() {
      return this.grid;
    }
  
    placeGoat(x, y) {
      if (this.grid[x][y] === null) {
        this.grid[x][y] = 'G';
        this.goatsPlaced++;
        return true;
      }
      return false;
    }
  
    movePiece(from, to) {
      const [fromX, fromY] = from;
      const [toX, toY] = to;
      this.grid[toX][toY] = this.grid[fromX][fromY];
      this.grid[fromX][fromY] = null;
    }
  }
  
  module.exports = Board;
  
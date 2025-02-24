// src/index.js
const Board = require('./boards');
const Rules = require('./rules');

class BaghChal {
  constructor() {
    this.board = new Board();
    this.turn = 'G'; // Goats start first
  }

  getBoardState() {
    return this.board.getState();
  }

  placeGoat(x, y) {
    if (this.turn === 'G' && this.board.placeGoat(x, y)) {
      this.turn = 'T';
      return true;
    }
    return false;
  }

  move(from, to) {
    if (Rules.isValidMove(this.board.getState(), from, to)) {
      this.board.movePiece(from, to);
      this.turn = this.turn === 'T' ? 'G' : 'T';
      return true;
    }
    return false;
  }
}

module.exports = BaghChal;

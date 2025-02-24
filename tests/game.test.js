// tests/game.test.js
const BaghChal = require('../src/index');

describe('BaghChal Game', () => {
  let game;

  beforeEach(() => {
    game = new BaghChal();
  });

  test('should initialize with 4 tigers', () => {
    const state = game.getBoardState();
    const tigers = state.flat().filter(cell => cell === 'T').length;
    expect(tigers).toBe(4);
  });

  test('should place a goat on an empty spot', () => {
    const success = game.placeGoat(2, 2);
    expect(success).toBe(true);
    expect(game.getBoardState()[2][2]).toBe('G');
  });

  test('should not place a goat on a taken spot', () => {
    game.placeGoat(2, 2);
    const success = game.placeGoat(2, 2);
    expect(success).toBe(false);
  });
});

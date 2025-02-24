# Bagh Chal - A JavaScript Game Library

## Description

**Bagh Chal** is a traditional board game originating from Nepal. The game features two types of pieces: **Tigers** and **Goats**. Tigers move across a grid to capture Goats by jumping over them, while Goats aim to block Tigers' movements or trap them. This library allows you to play Bagh Chal in a JavaScript environment, providing an easy-to-use API for game logic, board setup, piece placement, and move validation.

Inspired by the design principles of [chess.js](https://github.com/jhlywa/chess.js), this library allows you to simulate Bagh Chal with a simple yet powerful API.

## Features

- **Game Initialization**: Start a new game with predefined positions for Tigers and empty spots for Goats.
- **Game State**: Retrieve the current board state at any time.
- **Move Logic**: Tigers can move and capture Goats based on valid moves defined in the rules.
- **Goat Placement**: Place goats on the board, following the placement rules.
- **Turn-Based Gameplay**: Alternating turns between Goats and Tigers, with Goats starting.
- **Rule Validation**: Ensures all moves and placements are valid according to the game’s rules.

## Installation

To install the **Bagh Chal** library in your project, run the following npm command:

```bash
npm install baghchal
```

## Usage

### 1. Basic Example

```javascript
const BaghChal = require("baghchal");
const game = new BaghChal();

// Retrieve the initial state of the game
console.log(game.getBoardState());

// Place a goat on the board
game.placeGoat(2, 2);
console.log(game.getBoardState());

// Make a move for Tigers
game.move([0, 0], [1, 0]);
console.log(game.getBoardState());
```

### 2. Class API

#### `BaghChal`

The main class used to interact with the game.

**Methods:**

- `constructor()`: Initializes a new game instance with an empty board and places the Tigers at their initial positions.
- `getBoardState()`: Returns the current state of the board as a 2D array.
- `placeGoat(x, y)`: Places a Goat at the given coordinates if the spot is empty.
- `move(from, to)`: Moves a piece from one coordinate to another, ensuring the move is valid according to the game rules.

#### `Board`

A helper class that handles the board’s internal state and piece placement.

**Methods:**

- `getState()`: Returns the current state of the board.
- `placeGoat(x, y)`: Places a Goat at the specified coordinates.
- `movePiece(from, to)`: Moves a piece from one coordinate to another.

#### `Rules`

A class for defining and validating the game’s rules.

**Methods:**

- `isValidMove(board, from, to)`: Checks if a move is valid based on the game’s rules.

## Example: How the Game Works

- **Initialization**: The game starts with 4 Tigers placed at the corners of a 5x5 grid. The rest of the board is empty.
- **Goats' Turn**: Goats are placed on the board by calling the `placeGoat(x, y)` method. Each player takes turns placing Goats until all Goats are placed.
- **Tigers' Move**: Tigers can move from one square to another, following specific movement rules (e.g., they can capture Goats by jumping over them).
- **Game Over**: The game ends when one side (Goats or Tigers) achieves a win condition, or no more valid moves are possible.

## Running Tests

This project uses Jest for testing. To run the tests:

1. Install the dependencies:

```bash
npm install
```

2. Run the tests:

```bash
npm test
```

**Example Test Output:**

```bash
PASS  tests/game.test.js
  BaghChal Game
    ✓ should initialize with 4 tigers (xx ms)
    ✓ should place a goat on an empty spot (xx ms)
    ✓ should not place a goat on a taken spot (xx ms)
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.

## Contributing

We welcome contributions! If you'd like to improve the library or add features, please fork the repository and submit a pull request. Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request on GitHub

## Acknowledgements

**Bagh Chal** is an ancient game with deep roots in Nepalese culture. This library was created to digitally bring this game to a wider audience while respecting the traditional gameplay mechanics.

Special thanks to the creators of [chess.js](https://github.com/jhlywa/chess.js) for inspiring the design patterns and principles used in this library.

---

Let me know if you need any other adjustments!

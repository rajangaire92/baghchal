# Bagh Chal - A JavaScript Game Library

## Description

Bagh Chal is a popular traditional board game originating from Nepal. The game consists of two types of pieces: Tigers and Goats. Tigers move in a grid to capture Goats by jumping over them, and Goats attempt to block Tigers' movements or form a strategy to trap them.

This library allows you to play Bagh Chal in a JavaScript environment, implementing the board setup, piece placement, and game rules in a simple and extendable manner.

The library is inspired by the design principles of chess.js, aiming to provide a structured API to simulate the game logic and implement various game strategies.

## Features

- **Game Initialization**: Start a new game with predefined positions for Tigers and empty spots for Goats.
- **Game State**: Retrieve the current board state at any time.
- **Move Logic**: Tigers can move and capture Goats based on valid moves defined in the rules.
- **Placement of Goats**: Place goats on the board, adhering to the placement rules.
- **Turn-based Game**: Alternating turns between Goats and Tigers, starting with Goats.
- **Rule Validation**: Ensures all moves and placements are valid based on the game's rules.

## Installation

To install the Bagh Chal library in your project, run the following npm command:

```bash
npm install baghchal


Usage
1. Basic Example
javascript
Copy
Edit
const BaghChal = require('baghchal');
const game = new BaghChal();

// Retrieve the initial state of the game
console.log(game.getBoardState());

// Place a goat on the board
game.placeGoat(2, 2);
console.log(game.getBoardState());

// Make a move for Tigers
game.move([0, 0], [1, 0]);
console.log(game.getBoardState());
2. Class API
BaghChal
The main class used to interact with the game.

Methods:
constructor(): Initializes a new game instance with an empty board and places the Tigers at their initial positions.
getBoardState(): Returns the current state of the board as a 2D array.
placeGoat(x, y): Places a Goat at the given coordinates if the spot is empty.
move(from, to): Moves a piece from one coordinate to another, ensuring the move is valid according to the game rules.
Board
A helper class that handles the board's internal state and piece placement.

Methods:
getState(): Returns the current state of the board.
placeGoat(x, y): Places a Goat at the specified coordinates.
movePiece(from, to): Moves a piece from one coordinate to another.
Rules
A class for defining and validating the game's rules.

Methods:
isValidMove(board, from, to): Checks if a move is valid based on the game's rules.
Example: How the Game Works
Initialization: The game starts with 4 Tigers placed at the corners of a 5x5 grid, and the rest of the board is empty.
Goats' Turn: Goats are placed on the board by calling the placeGoat(x, y) method. Each player takes turns placing Goats until all Goats are placed.
Tigers' Move: Tigers can move from one square to another, following specific movement rules (e.g., they can capture Goats by jumping over them).
Game Over: The game ends when one side (Goats or Tigers) achieves a win condition or no more valid moves are possible.
Running Tests
This project uses Jest for testing. To run the tests:

Install the dependencies:

bash
Copy
Edit
npm install
Run the tests:

bash
Copy
Edit
npm test
Example Test Output:
bash
Copy
Edit
PASS  tests/game.test.js
  BaghChal Game
    ✓ should initialize with 4 tigers (xx ms)
    ✓ should place a goat on an empty spot (xx ms)
    ✓ should not place a goat on a taken spot (xx ms)
License
MIT License - See LICENSE for more details.

Contributing
We welcome contributions! If you'd like to improve the library or add features, please fork the repository and submit a pull request. Here's how you can contribute:

Fork the repository
Create a new branch (git checkout -b feature-name)
Make your changes and commit them (git commit -am 'Add new feature')
Push to the branch (git push origin feature-name)
Open a pull request on GitHub
Acknowledgements
Bagh Chal is an ancient game with deep roots in Nepalese culture. The game was adapted for this library with respect to its rules and gameplay mechanics.
Special thanks to the creators of chess.js for inspiring the design patterns and principles used in this library.
vbnet
Copy
Edit

### What this will look like on the npm website:

1. **Title and Description**: The library name (`Bagh Chal`) and the description will appear on top of the page.
2. **Usage**: Instructions for installing and using the library will be listed with code examples.
3. **License**: Details about the license.
4. **Contributing**: Information on how others can contribute to the library.

Once you’ve added this content to the `README.md` file and published the package, npm will automatically render it on the package page.

Let me know if you need anything else!
```

// src/rules.js
class Rules {
    static isValidMove(board, from, to) {
        const [fromX, fromY] = from;
        const [toX, toY] = to;
        
        // Check if the destination is within bounds
        if (toX < 0 || toX > 4 || toY < 0 || toY > 4) return false;
        
        // Check if the destination is empty
        if (board[toX][toY] !== null) return false;
        
        // Check if move is valid for tigers and goats
        return true; // Add detailed validation logic here
    }
}

export default Rules;

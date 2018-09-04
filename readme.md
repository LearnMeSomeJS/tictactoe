# Tic tac toe:

## Available functions:

#### Printing

- `printIcon(positionObject, isPlayerOne)`: For a given player and board position, prints the corresponding icon
- `printMessage(message)`: Prints a message to the screen
- `clearBoard()`: Clears the board
- `clearMessage()`: Clears message

#### Positioning
- `getPosition(positionObject)`: Returns X or O for a given board position
- `getLine(line)`: Returns an array of elements in a given line
- `getColumn(column)`: Returns an array of elements in a given column

#### How it works:

Every click inside the board will trigger the `clickedPlace` function that will return a position object.
A position object is essentially an object containing the line and column where the click happened:	`{ line: 1, column: 1}`.
The next exercises will push you towards completing the game.

#### Exercises

1. Every time a user clicks on the board fill the corresponding square.
1. Every time a user clicks on the board add a check to see if it's already filled.
    - If it's filled, print a message to the screen warning about that situation.
1. Add an `isPlayerOne` flag that toggles between `true` and `false` every time a user clicks on the board. Using the flag:
    - Toggle between printing an 'X' or an 'O'
    - Print a message saying whose turn it is
1. Check if a user won by _line_
    - Add a message saying which player won by line
    - Clear the board (only add this functionality after you're certain everything works properly)
1. ...Now check _column_ doing the same things cited above
1. ...Now check _diagonals_ doing the same things cited above
1. (Conditional) If the game isn't complete. Write the code that completes the game.

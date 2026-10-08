# Question 2: NodeJS Modules and File Handling

## Problem Statement
Create a NodeJS application that:
- Creates a custom module containing functions to add and multiply two numbers.
- Imports the module into the main program.
- Accepts two numbers and displays their sum and product.
- Demonstrates the use of `require()`.
- Demonstrates File Handling using `fs` (writes calculation log and reads it back).

## Files
- `mathModule.js` - Custom module exporting `add` and `multiply` functions.
- `index.js` - Main entry script importing `mathModule` via `require()` and using `fs` to write/read calculations.

## How to Run

```bash
# Default arguments (25 and 15):
npm run q2

# Or pass custom arguments:
node Question-02/index.js 30 7
```

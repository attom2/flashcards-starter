const http = require('http');
const Game = require('/Users/andy/flashcards-andy/src/Game.js') 
let app = http.createServer();

const game = new Game();
game.start();
// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

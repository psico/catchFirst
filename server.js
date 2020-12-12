import express from 'express';
import http from 'http';
import createGame from "./public/game.js";

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

const game = createGame();
game.addPlayer({playerId: 'player1', playerX: 0, playerY: 0});
game.addPlayer({playerId: 'player2', playerX: 7, playerY: 0});
game.addPlayer({playerId: 'player3', playerX: 9, playerY: 0});
game.addFruit({fruitId: 'fruit1', fruitX: 3, fruitY: 3});
game.addFruit({fruitId: 'fruit2', fruitX: 3, fruitY: 5});
game.movePlayer({ playerId: "player1", keyPressed: "ArrowRight"})

server.listen(3000, () => {
    console.log('> Server listening on port: 3000');
});

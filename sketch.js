var database;
var position;
var canvas,backgroundImage;
var gameState = 0;
var playerCount;
var player,form,game;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
 
}

function draw(){

}


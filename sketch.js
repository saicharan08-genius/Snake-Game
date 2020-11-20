var snake;
var w;
var h;
var food;
var score = 0;
var rez = 10;

function setup()
{
  createCanvas(500,500);
  frameRate(5);
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  foodlocation();
}
function foodlocation(){
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x , y);
}
function keyPressed(){
  if(keyCode == UP_ARROW){
    snake.setdir(0 , -1);
  }else if(keyCode == DOWN_ARROW){
    snake.setdir(0 , 1);
  }else if(keyCode == LEFT_ARROW){
    snake.setdir(-1 , 0);
  }else if(keyCode == RIGHT_ARROW){
    snake.setdir(1 , 0);
  }
}
function draw(){
  background(100);
  scale(rez);
  if(snake.eat(food)){
    score++ ; 
    foodlocation();
  }
  snake.update();
  snake.show();
  noStroke();
  fill(50);
  rect(food.x , food.y , 1 , 1);
  if(snake.endGame()){
    console.log('game over');
    background(255 , 160 , 122);
    textSize(4);
    textAlign(CENTER);
    text("SCORE:" + score , w/2 , h/2);
    noLoop();
  }
}

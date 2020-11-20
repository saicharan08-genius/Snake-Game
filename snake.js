class Snake{
  constructor (){
    this.body = [];
    this.body[0] = createVector(0 , 0);
    this.directionX = 0;
    this.directionY = 0;
    
  }
  setdir(x,y){
    this.directionX = x;
    this.directionY = y;
  }
  grow(){
    var head = this.body[this.body.length - 1].copy();
    this.body.push(head);
  }
  eat(foodposition){
    var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    if(x == foodposition.x && y == foodposition.y){
      console.log("Food is eaten");
      this.grow();
      return true;
    }
  }
  update(){
    var head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.directionX;
    head.y += this.directionY;
    this.body.push(head);
  }
  show(){
    for(var i = 0 ; i < this.body.length ; i++){
      noStroke();
      fill(0);
      rect(this.body[i].x , this.body[i].y , 1 , 1);
    }
  }
  endGame(){
    var headx = this.body[this.body.length - 1].x;
    var heady = this.body[this.body.length - 1].y;
    if(headx > w-1 || heady > h-1 || headx < 0 || heady < 0){
      return true;
    }
    for(var i = 0 ; i < this.body.length - 1 ; i++){
      var part = this.body[i];
      if(part.x == headx && part.y == heady){
        return true;
      } 
    }
      return false;     
  }
  }

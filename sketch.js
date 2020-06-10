var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  //ball.velocityX=-6;
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
}

function draw() {
  background(0,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
  
  if(ball.bounceOff(paddle))
  {
    explosion();
  }
  fill("white");
  text("click space to start", 150, 50);
  text("click the up arrow to make the paddle move up", 80, 70);
  text("click the down arrow to make the paddle move down", 64, 90);

  if(keyDown("space")){
    ball.velocityX=random(5,8);
    ball.velocityY=random(5,8); 
  }
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}


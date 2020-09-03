var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(300,250,30,30);
  rect1.shapeColor="green";
  rect1.debug=true;

  rect2=createSprite(500,400,30,30);
  rect2.shapeColor="green";
  rect2.debug=true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.y=mouseY;
movingRect.x=mouseX;

if (isTouching(movingRect,rect1)) {
  movingRect.shapeColor="red";
  rect1.shapeColor="red";
} else {
  movingRect.shapeColor="green";
  rect1.shapeColor="green";
}
  
  drawSprites();
}


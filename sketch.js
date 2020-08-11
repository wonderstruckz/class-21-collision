var mr, fr;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50); 
  mr.shapeColor = "blue";
  fr = createSprite(600,200,50,50);
  fr.shapeColor = "blue";
  rect1 = createSprite(200,100,50,50);
  rect1.shapeColor = "blue";
  rect2 = createSprite(300,100,50,50);
  rect2.shapeColor = "blue";
  rect3 = createSprite(400,100,50,50);
  rect3.shapeColor = "blue";
  rect4 = createSprite(500,100,50,50);
  rect4.shapeColor = "blue";
  mr.debug = true;
  fr.debug = true;
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
  rect4.debug = true;
}

function draw() {
  background(255,255,255);  
  mr.y = World.mouseY
  mr.x = World.mouseX
  if(istouching(mr, rect1)){
    mr.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else{
    mr.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }
  drawSprites();
}


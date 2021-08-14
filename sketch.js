var bg,bg1

function preload(){
  bg1 = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1200,1200);
  
  bg = createSprite(650,600,300,300)
  bg.addImage("background",bg1)
  bg.scale = 1.3
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
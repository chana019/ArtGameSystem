let x, y;
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
 canvas = createCanvas(canvasWidth, canvasHeight);
 canvas.position(windowWidth/2 - canvasWidth/2, 20);
 x = canvasWidth / 2;
 y = canvasHeight;
}

function draw() {
 background(30);
 stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);

  // Jiggling randomly on the horizontal axis

  // Moving up at a constant speed
  y = y - 1;
}

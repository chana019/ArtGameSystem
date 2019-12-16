let x, y;
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
 canvas = createCanvas(canvasWidth, canvasHeight);
 canvas.position(windowWidth/2 - canvasWidth/2, 20);
 x = width / 2;
 y = height;
}

function draw() {
 background(30);
 stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);

  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
}

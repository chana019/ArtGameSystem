let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let x, y, h;
let a, b, c, d, e, f, g;


function setup() {
 canvas = createCanvas(canvasWidth, canvasHeight);
 canvas.position(windowWidth/2 - canvasWidth/2, 20);
 x = canvasWidth / 2;
 a = 0;
 b = -100;
 e = -20;
 noCursor();
}

function draw() {
  background(255);

   // Draw a circle
   stroke(50);
   fill(100);
   ellipse(x, a, 35, 35);
   fill(120, 20, 50);
   rect(100, b, 20, 20);
   fill(0);
   rect(30, e, 55, 55, 20);
   fill(255,0,0);
   rect(mouseX, mouseY, 40,40);

   // Jiggling randomly on the horizontal axis
   // Moving up at a constant speed

   a = a + 2;
   b = b + 2;
   c = c + 3 ;
   d = d + 4 ;
   e = e + 5;
   f = f + 6;
   g = g + 7;

   // Reset to the bottom
   if (a > canvasHeight) {
     a = 0;
   }
     if (b > canvasHeight) {
     b = 0;
   }
   if (c > canvasHeight) {
     c = 0;
   }
   if (d > canvasHeight) {
     d = 0;
   }
   if (e > canvasHeight) {
     e = 0;
   }

}

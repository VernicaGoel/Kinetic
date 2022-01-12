var h=0;
var theta = 5;
var circ = 500;
var x=50;
var speed=10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

}

function draw() {
  background(0);
  noStroke();
  
  Aoffset = 360/circ;
  Soffset = 100/circ;
  Xoffset = width/circ;
  
  AA= map(mouseX, 0, width, 0.1, 25);
  
  for(let i=0; i<circ;i++) {
    y = windowHeight/5 *  cos(theta + i + Aoffset + AA)
  
  fill(h%360,i*Soffset,100);
    let size = map(i,0,circ,0,15);
  triangle(i * Xoffset,  100+y, size, 10,20,5);
  }
  
  AA= map(mouseY, 0, width, 0.1, 5);
  
  for(let i=0; i<circ;i++) {
    y = windowHeight/5 *  tan(theta + i + Aoffset + AA)
  
  fill(h%360,i*Soffset,100);
    let size = map(i,0,circ,0,10);
  triangle(i * Xoffset ,100+y, size,10,20,5);
  }
    h++;
  theta = theta + 0.001;
   
}


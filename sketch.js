var h=0;
var theta = 5;
var circ = 500;
var x=50;
var speed=5;
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
  
  AA= map(mouseX, 0, width, 0.1,25);
  
  for(let i=0; i<circ;i++) {
    y = windowHeight/5 *  sin(theta + i + Aoffset + AA)
  
  fill(h%360,i*Soffset,100);
    let size = map(i,0,circ,0,10);
  circle(i * Xoffset ,400+y, size);
  }
  
  AA= map(mouseY, 0, width, 0.1,25);
  
  for(let i=0; i<circ;i++) {
    y = windowHeight/5 *  sin(theta + i + Aoffset + AA)
  
  fill(h%360,i*Soffset,100);
    let size = map(i,0,circ,0,10);
  circle(i * Xoffset ,200+y, size);
  }
    h++;
  theta = theta + 0.1;
   
    
}


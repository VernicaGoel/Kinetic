var h=0;
var theta = 10;
var circ =100;
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
  
  AA= map(mouseX, 0, width, 1, 15);
  
  for(let i=0; i<circ;i++) {
    y = windowHeight/5 *  tan(theta + i + Aoffset + AA)
  
  fill(h%360,i*Soffset,100);
    let size = map(i,0,circ,0,15);
  square(i * Xoffset ,500+y, size);
  }
  
  AA= map(mouseY, 0, width, 0.1, 15);
  
  for(let i=0; i<circ;i++) {
    y = windowHeight/5 *  tan(theta + i + Aoffset + AA)
  
  fill(h%360,i*Soffset,100);
    let size = map(i,0,circ,0,15);
  square(i * Xoffset ,200+y, size);
  }
    h++;
  theta = theta + 0.05;
   
    
}


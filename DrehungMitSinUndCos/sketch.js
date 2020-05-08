let angle =0;
function setup() {
  createCanvas(400, 400);
 
}

function draw() {
   strokeWeight(6);
  background(150);
 
  if(keyIsPressed && keyCode === LEFT_ARROW){
    angle -= PI/60;
    print('Links gedrückt');    
  }
  if(keyIsPressed && keyCode === RIGHT_ARROW){
    angle += PI/60;
    print('Rechts gedrückt');    
  }
  translate(width/2, height/2);
  line(0,0,(width/2 -50)*cos(angle),(height/2-50)*sin(angle));
  strokeWeight(1);
 noFill();
  circle(0,0,300);
  
}
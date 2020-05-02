class Vehicle {
  constructor(x, y) {
    this.velocity = createVector(0.5, 0.5);
    this.position = createVector(x, y);
    this.size = 50;
    this.theta = 0;
    this.maxSpeed = 2;
  }

  update() {
     this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
   // this.acceleration.mult(0);
  }

  lenken() {

    let speed = this.velocity.mag();
    if (keyIsPressed && key === 'a') {
      this.theta -= 0.017;
    }
    if (keyIsPressed && key === 'd') {
      this.theta += 0.017;
    }
    this.velocity.x = speed * cos(this.theta);
    this.velocity.y = speed * sin(this.theta);
  }

  display() {
     this.theta = this.velocity.heading();
    push();
    translate(this.position.x, this.position.y);
   
    rotate(this.theta);
     circle(0, 0, this.size);
  
    pop();
  }

}
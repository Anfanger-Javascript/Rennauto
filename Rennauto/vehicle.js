class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(2, 1);
    this.position = createVector(x, y);
    this.maxspeed = 3;
    this.maxforce = 0.15;
    this.millisOld = millis();
    this.imageCounter = 0;
    this.desired = this.acceleration;
    this.steer = this.acceleration;

    this.theta = this.velocity.heading();
    this.imageSize_x = 25;
    this.imageSize_y = 15;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  applyForce(force){
   this.acceleration.add(force); 
  }

  lenken() {
    let speed = this.velocity.mag();
    if (keyIsPressed && key === 'a') {
      this.theta -= 0.1;
    }
    if (keyIsPressed && key === 'd') {
      this.theta += 0.1;
    }
    this.velocity.x = speed * cos(this.theta);
    this.velocity.y = speed * sin(this.theta);
  }

  display() {
    this.theta = this.velocity.heading();
    push();
    translate(this.position.x, this.position.y);
    if (millis() > this.millisOld + 150) {
      this.millisOld = millis();
      this.imageCounter++;
      if (this.imageCounter > 5) this.imageCounter = 0;
    }
    rotate(this.theta);
   /* image(cat[this.imageCounter], -this.imageSize_x / 2, -this.imageSize_y / 2, this.imageSize_x, this.imageSize_y);
   */
    image(renner, -this.imageSize_x / 2, -this.imageSize_y / 2, this.imageSize_x, this.imageSize_y);
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(-this.imageSize_x / 2, -this.imageSize_y / 2, this.imageSize_x, this.imageSize_y);
    pop();
  }

}
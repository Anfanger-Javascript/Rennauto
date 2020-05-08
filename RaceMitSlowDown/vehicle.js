class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(1, 1);
    this.position = createVector(x, y);
    this.r = 6;
    this.maxspeed = 3;
    this.maxforce = 0.15;
    this.millisOld = millis();
    this.desired = this.acceleration;
    this.steer = this.acceleration;
    this.angleStep = PI / 60;
    this.theta = this.velocity.heading();
    this.imageSize_x = 25;
    this.imageSize_y = 15;
    this.laenge = sqrt(this.imageSize_x / 2 * this.imageSize_x / 2 + this.imageSize_y / 2 * this.imageSize_y / 2);
    this.speed = this.velocity.mag();
    print("this.speed = " + this.speed);
    this.isGreen = false;

  }
  // Method to update location
  update() {
   
    this.position.add(this.velocity);
   
    let festerWinkel = atan(this.imageSize_y / this.imageSize_x );
    strokeWeight(6);
    //vorne rechts
    let x1 = this.position.x + cos(this.theta + festerWinkel) * this.laenge;
    let y1 = this.position.y + sin(festerWinkel + this.theta) * this.laenge;
   
    // Wir checken die Hintergrundfarbe an diesem Punkt    
   
    let c1 = get(x1, y1);
     point(x1, y1);
    print("x1 = " + nfc(x1, 2) + " , y1 = " + nfc(y1, 2) + ", c1 = " + c1);

    //vorne links
    let x2 = this.position.x + cos(this.theta - festerWinkel) * this.laenge;
    let y2 = this.position.y + sin(-festerWinkel + this.theta) * this.laenge;
    let c2 = get(x2, y2);
    point(x2, y2);
    print("x2 = " + nfc(x2, 2) + " , y2 = " + nfc(y2, 2) + ", c2 = " + c2);
    //hinten links
    let x3 = this.position.x + cos(this.theta + festerWinkel + PI) * this.laenge;
    let y3 = this.position.y + sin(festerWinkel + this.theta + PI) * this.laenge;
    let c3 = get(x3, y3);
    point(x3, y3);
    print("x3 = " + nfc(x3, 2) + " , y3 = " + nfc(y3, 2) + ", c3 = " + c3);
    //hinten rechts
    let x4 = this.position.x + cos(this.theta - festerWinkel + PI) * this.laenge;
    let y4 = this.position.y + sin(-festerWinkel + this.theta + PI) * this.laenge;
    let c4 = get(x4, y4);
    point(x4, y4);
    print("x4 = " + nfc(x4, 2) + " , y4 = " + nfc(y4, 2) + ", c4 = " + c4 + " , c4[1] = " + c4[1]);
    if (c1[1] < 220 || c2[1] < 220 || c3[1] < 220 || c4[1] < 220) this.isGreen = true;
    else this.isGreen = false;
  }
  /*
  applyForce(force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
  }

  boundaries() {
    this.desired = null;
    if (this.position.x < d) {
      this.desired = createVector(this.maxspeed, this.velocity.y);
    } else if (this.position.x > width - d) {
      this.desired = createVector(-this.maxspeed, this.velocity.y);
    }

    if (this.position.y < d) {
      this.desired = createVector(this.velocity.x, this.maxspeed);
    } else if (this.position.y > height - d) {
      this.desired = createVector(this.velocity.x, -this.maxspeed);
    }

    if (this.desired !== null) {
      this.desired.normalize();
      this.desired.mult(this.maxspeed);
      this.steer = p5.Vector.sub(this.desired, this.velocity);
      this.steer.limit(this.maxforce);
      this.applyForce(this.steer);
    }
  }*/

  lenken() {
    if (keyIsPressed && key === 'a') {
      this.theta = this.theta - 0.1;
    }

    if (keyIsPressed && key === 'd') {
      this.theta += 0.1;
    }
    if (this.isGreen) {
      this.velocity.x = this.speed * 0.5 * cos(this.theta);
      this.velocity.y = this.speed * 0.5 * sin(this.theta);
      print("Auf Grün ist v = " + this.velocity.mag());
    } 
    else {
      this.velocity.x = this.speed * cos(this.theta);
      this.velocity.y = this.speed * sin(this.theta);
      print("Auf Weiss ist v = " + this.velocity.mag());
    }
  }
  display() {

    push();
    //hierhin wird die linke obere Ecke des Katzenbildes verschoben
    translate(this.position.x, this.position.y);
    rotate(this.theta);
    image(renner, -this.imageSize_x / 2, -this.imageSize_y / 2, this.imageSize_x, this.imageSize_y);

    noFill();
    stroke(0);
    strokeWeight(2);
    //Die Farben werden erst richtig angezeigt, wenn das Rechteck weg ist
    //rect(-this.imageSize_x / 2, -this.imageSize_y / 2, 25, 15);
    pop();

  }
}
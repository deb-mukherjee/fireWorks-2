
var fireworks = [];
var gravity;

function setup() {
  createCanvas(1500, 740);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);

  push();  
  textSize(35)
  stroke("white")
  textFont('Helvetica');
  text("HAPPY BIRTHDAY SANIKAAAA!!!",500,270)
  pop();

  
  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

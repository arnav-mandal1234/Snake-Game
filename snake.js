// Constants for square size and grid dimensions
const pix = 20; // Size of the squares
const ROWS = Math.floor(windowWidth / pix);
const COLS = Math.floor(windowHeight / pix);

function Snake() {
  this.total = 0;
  this.tail = [];
  this.x = Math.floor(random(20, ROWS - 20)) * pix;
  this.y = Math.floor(random(15, COLS - 15)) * pix;
  let temp = floor(random(0, 4));
  this.xspeed = 0;
  this.yspeed = 0;

  // Initialize the direction
  if (temp == 1) {
    this.xspeed = 1;
  } else if (temp == 2) {
    this.yspeed = 1;
  } else if (temp == 3) {
    this.xspeed = -1;
  } else {
    this.yspeed = -1;
  }

  // Update function to move the snake
  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total] = createVector(this.x, this.y);
    this.x += this.xspeed * pix;
    this.y += this.yspeed * pix;
  };

  // Show function to draw the snake
  this.show = function() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, pix, pix);
    }
  };

  // Direction function to change the snake's direction
  this.dir = function(x, y) {
    // Ensure you cannot instantly reverse direction
    if (this.xspeed !== -x) {
      this.xspeed = x;
    }
    if (this.yspeed !== -y) {
      this.yspeed = y;
    }
  };
}

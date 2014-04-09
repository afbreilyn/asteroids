(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MoveObject = Asteroids.MoveObject = function (pos, vel, radius, colour) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.colour = colour;
    this.centerX = pos[0];
    this.centerY = pos[1];
  }

  MoveObject.prototype.move = function(vel) {
    this.centerX += vel[0] % screenWidth; //screenWidth comes from game
    this.centerY += vel[1] % screenHeight;
  };

  MoveObject.prototype.draw = function(ctx){ //ctx comes from game
    ctx.fillStyle = "pink";
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MoveObject.prototype.isCollideWith(otherObject){
    distX = this.centerX - otherObject.centerX;
    distY = this.centerY - otherObject.centerY;
    totRad = this.radius + otherObject.radius;
    if (distX < totRad || distY < totRad) {
      return true;
    } else {
      return false;
    }
  };

})(this);





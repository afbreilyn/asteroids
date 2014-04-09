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

  MoveObject.prototype.move = function(screenWidth, screenHeight) {

    this.centerX += this.vel[0] % screenWidth; //screenWidth comes from game
    this.centerY += this.vel[1] % screenHeight;

    if (this.centerX - this.radius >= screenWidth) {
      this.centerX = 0 - this.radius;
    } else if (this.centerX + this.radius <= 0) {
      this.centerX = screenWidth + this.radius;
    }

    if (this.centerY - this.radius >= screenHeight) {
      this.centerY = 0 - this.radius;
    } else if (this.centerY + this.radius <= 0) {
      this.centerY = screenHeight + this.radius;
    }

    // console.log("center:")
    // console.log(this.centerX)
    // console.log("vel")
    // console.log(this.vel[0])
    // console.log(screenWidth)
  };

  MoveObject.prototype.draw = function(ctx){ //ctx comes from game
    ctx.fillStyle = "hotpink";
    ctx.beginPath();
    //console.log(ctx);
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

  MoveObject.prototype.isCollideWith = function(otherObject){
    distX = this.centerX - otherObject.centerX;
    distY = this.centerY - otherObject.centerY;
    totRad = this.radius + otherObject.radius;
    if (distX < totRad || distY < totRad) {
      return true;
    } else {
      return false;
    }
  };

  Function.prototype.inherits = function(superClass){
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  };

})(this);





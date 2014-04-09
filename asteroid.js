(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, colour) {
    Asteroid.inherits(movingObject);
    movingObject.call(this, pos, vel, radius, colour);
  };

  Asteroid.COLOUR = 'black';
  Asteroid.RADIUS = 35;

  Asteroid.prototype.randPosition = function(){
    startX = Math.floor(Math.random()*screenWidth);
    startY = Math.floor(Math.random()*screenHeight);
    return newPos = [startX, startY];
  };

  Asteroid.randomAsteroid = function(screenWidth, screenHeight) {
    newVel = Math.floor(Math.random()*5);
    newPos = this.randPosition();
    return new Asteroid(newPos, newVel, Asteroid.RADIUS, Asteroid.COLOUR);
  };

})(this);

Function.prototype.inherits = function(superClass){
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
};
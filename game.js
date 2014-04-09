(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(canvasEl) {
    this.ctx = canvasEl.getContext("2d");
    this.SCREENWIDTH = 300;
    this.SCREENHEIGHT = 300;
    this.asteroids = this.addAsteroids(10);
  };

  Game.prototype.addAsteroids = function(num) {
    astArray = [];
    for (var i = 0; i < num; i++) {
      astArray.push(Asteroids.Asteroid.randomAsteroid(this.SCREENWIDTH, this.SCREENHEIGHT));
    }
    return astArray;
  };

  Game.prototype.draw = function() {
    this.ctx.clearRect(0,0, this.SCREENWIDTH, this.SCREENHEIGHT);
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      // console.log("anything");
      asteroid.draw(that.ctx);
    })
  };

  Game.prototype.move = function(){
    var that = this;
    this.asteroids.forEach(function(asteroid){
      asteroid.move(that.SCREENWIDTH, that.SCREENHEIGHT);
    })
  };

  Game.prototype.step = function(){
    var game = this;
    // console.log(game.asteroids);
    game.asteroids.forEach(function(asteroid){
      for (var i = 0; i < game.asteroids.length; i++){
        // console.log("(asteroid.isCollideWith(game.asteroids[i]))")
        if (asteroid.isCollideWith(game.asteroids[i])){

          //delete asteroid;
          // delete game.asteroids[i];
        }
      }
      game.move();
      game.draw();
    })
  };

  Game.prototype.start = function(){
    // var ctx = canvasEl.getContext("2d");
    var game = this;
    // game.step()
    window.setInterval(function () {
      game.step();
    }, 30);
  };

})(this);

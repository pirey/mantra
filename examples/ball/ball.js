var Ball = (function() {
  var Ball = Mantra.circle.new();
  
  Ball.new = function _new(x, y, radius) {
    var o = Object.create(Ball);

    o.x = x;
    o.y = y;
    o.radius = radius;

    return o;
  };

  Ball.update = function update(game, dt) {
  };

  return Ball;
})();

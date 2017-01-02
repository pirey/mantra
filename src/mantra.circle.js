Mantra = (function(Mantra) {
  var circle = Mantra.object.new();

  circle.new = _new;
  circle.render = render;

  // circleverride these
  circle.update = function() {};

  Mantra.circle = circle;
  return Mantra;

  //--

  function _new(x, y, radius) {
    var o = Object.create(circle);
    o.x = x;
    o.y = y;
    o.radius = radius;
    return o;
  }

  function render(game) {
    game.ctx.beginPath();
    game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    game.ctx.fillStyle = 'skyblue'; // TODO make this dynamic
    game.ctx.fill();
  }

})(Mantra || {});


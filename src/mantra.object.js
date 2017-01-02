Mantra = (function(Mantra) {
  var obj = {};

  obj.x = 0;
  obj.y = 0;
  obj.vx = 0;
  obj.vy = 0;
  obj.ax = 0;
  obj.ay = 0;
  obj.maxVx = 500;
  obj.maxVy = 500;
  obj.maxAx = 300;
  obj.maxAy = 300;
  obj.frictionX = 0;
  obj.frictionY = 0;

  obj.new = _new;

  // objverride these
  obj.update = function() {};
  obj.render = function() {};

  Mantra.object = obj;
  return Mantra;

  //--

  function _new(x, y) {
    var o = Object.create(obj);
    o.x = x;
    o.y = y;
    return o;
  }

})(Mantra || {});


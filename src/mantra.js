var Mantra = (function() {

  function Mantra(canvas) {
    return _new(canvas);
  }

  Mantra.new = _new;
  Mantra.addObject = addObject;
  Mantra.renderObjects = renderObjects;
  Mantra.refresh = refresh;
  Mantra.loop = loop; // main game loop
  Mantra.start = start;

  // override these
  Mantra.init = function() {};
  Mantra.update = function() {};

  return Mantra;

  //--

  function _new(canvas) {
    var game = Object.create(Mantra);

    game.canvas = canvas;
    game.ctx = canvas.getContext('2d');
    game.objects = [];

    return game;
  }

  function addObject(object) {
    this.objects.push(object);
  }

  function renderObjects(dt) {
    this.objects.forEach(function(object) {
      object.update(this, dt);
      object.render(this, dt);
    }.bind(this));
  }

  function refresh() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  function loop(elapsed) {
    window.requestAnimationFrame(this.loop.bind(this));

    var dt = (elapsed - (this.lastElapsed||elapsed)) / 1000;

    this.refresh();
    this.lastElapsed = elapsed;
    this.renderObjects(dt);
    this.update(dt);
  }

  function start() {
    this.init();
    this.loop(window.performance.now());
  }
  
})();

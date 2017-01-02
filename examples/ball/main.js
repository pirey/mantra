var game = Mantra(document.getElementById('game'));
var ball = Ball.new(100, 100, 25);

game.init = init;
game.update = update;
game.start();

function init() {
  this.addObject(ball);
}

function update(dt) {
}

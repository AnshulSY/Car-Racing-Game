var canvas;
var form;

function setup() {
  canvas = createCanvas(400, 400);
  form = new Form()
}

function draw() {
  form.display();
}
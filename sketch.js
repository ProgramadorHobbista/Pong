let posicaoX;
let posicaoY;
let velocidade;


function setup() {
  createCanvas(400, 400);
  posicaoX = width/2;
  posicaoY = height/2;
  velocidade = 1;
}

function draw() {
  background(100,20,40);
  circle(posicaoX,posicaoY,30);
  
  posicaoX = posicaoX + velocidade;
  posicaoY = posicaoY + velocidade;
}

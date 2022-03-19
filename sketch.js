class Bola{
  constructor(){
    this.posicaoX = width/2;
    this.posicaoY = height/2;
    this.velocidadeX = random([-5,-3,3,5]);
    this.velocidadeY = random([-5,-3,3,5]);
    this.diametro = 20;
  }
 
 
  desenhar(){
    circle(this.posicaoX,this.posicaoY,this.diametro);
  }
 
  movimentar(){
    this.posicaoX+=this.velocidadeX;
    this.posicaoY+=this.velocidadeY;
  }
 
  checarBordas(){
    if(this.posicaoX-this.diametro/2<=0){
      this.velocidadeX*=-1;
    }else if(this.posicaoX+this.diametro/2>=width){
	  this.velocidadeX*=-1;
	}
	
    if(this.posicaoY-this.diametro/2<=0){
      this.velocidadeY*=-1;
	}
    if(this.posicaoY+this.diametro/2>=height){
      this.velocidadeY*=-1;
	}
  }
     
}

class Jogador{
  constructor(tipoJ){
    this.id=tipoJ;
    this.altura = 60;
    this.largura = 20;
    
    if(this.id==1){
      this.posicaoX=0;
    }else if(this.id==2){
      this.posicaoX = width-this.largura;
    }
    this.posicaoY = height/2;
    this.velocidadeY = 10;
  }
  
  movimentar(){
    
  }
  
  desenhar(){
    rect(this.posicaoX,this.posicaoY,this.largura,this.altura);
  }
}

function setup() {
  createCanvas(400, 400);
  bola1 = new Bola();
  jogador1 = new Jogador(1);
  jogador2 = new Jogador(2);
 
}

function draw() {
  background(100,20,40);
  bola1.desenhar();
  bola1.movimentar();
  bola1.checarBordas();
  jogador1.desenhar();
  jogador2.desenhar();
}

var mar,marImagem;

var navio,navioImagem;

function preload(){

 marImagem = loadAnimation("sea.png");

 navioImagem = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite(200,200,400,400);
  mar.addAnimation ("marImagem", marImagem);
  mar.scale = 0.25;

  navio =createSprite(100,200,40,40);
  navio.addAnimation ("navioImagem", navioImagem);
  navio.scale = 0.25;
}


function draw() {

background("blue");


drawSprites();

 
}

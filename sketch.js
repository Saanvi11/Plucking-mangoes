
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	this.boyImg = loadImage(sprites2/this.boyImg.png);
}
	


function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone = new Stone(500, 500, 30, 40);




	Engine.run(engine);
  
}


function draw() {

	Img(this.boyImg);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




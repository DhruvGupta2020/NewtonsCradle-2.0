
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var bar;
var chain1,chain2,chain3,chain4,chain5;
var ball1,ball2,ball3,ball4,ball5;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,10);
    bar = new Box(390,200,375,20);
	ball1 = new Ball(265,500,30);
	ball2 = new Ball(325,500,30);
	ball3 = new Ball(385,500,30);
	ball4 = new Ball(445,500,30);
	ball5 = new Ball(505,500,30);
	chain1 = new Chain(ball1.body,{x:265,y:200});
	chain2 = new Chain(ball2.body,{x:325,y:200});
	chain3 = new Chain(ball3.body,{x:385,y:200});
	chain4 = new Chain(ball4.body,{x:445,y:200});
	chain5 = new Chain(ball5.body,{x:505,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  bar.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY});
  
}


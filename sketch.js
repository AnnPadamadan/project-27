
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(300, 500, 50);
ball2 = new Ball(350, 500, 50);
ball3 = new Ball(400, 500, 50);
ball4 = new Ball(450, 500, 50);
ball5 = new Ball(500, 500, 50);
bar1 = new Bar(400, 50, 400, 50);
rope1 = new Rope(bar1.body, ball1.body, 0, 0);
rope2 = new Rope(ball2.body, bar1.body, 0, 0);
rope3 = new Rope(ball3.body, bar1.body, 0, 0);
rope4 = new Rope(ball4.body, bar1.body, 0, 0);
rope5 = new Rope(ball5.body, bar1.body, 0, 0); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  bar1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
  if(keyCode=== LEFT_ARROW){
   
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-85});
 
  }
}




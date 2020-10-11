const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,boObject3,bobObject4;
var roof;
var rope1;

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	bobObject1 = new bob(400,600);
	bobObject2 = new bob(340,600);
	bobObject3 = new bob(280,600);
	bobObject4 = new bob(460,600);
	bobObject5 = new bob(520,600);
	roof = new Roof(400,400,500,50);
	rope1 = new Rope(bobObject1.body,roof.body,-60*2,0);
	Engine.run(engine);
  
}
function draw() {
  background(rgb(230, 230, 230));
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  drawSprites();
 
}

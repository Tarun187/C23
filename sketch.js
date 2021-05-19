const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;
var box2;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  //myworld is myengine's world
  world = engine.world;

  box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground= new Ground(200,390,400,20);
  console.log(box1);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  console.log(box2.body.angle)
  box1.display();
  box2.display();
  ground.display();
  //drawSprites();
}

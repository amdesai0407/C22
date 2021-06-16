const Bodies=Matter.Bodies;
const World= Matter.World;
const Engine=Matter.Engine;

var ball;
var engine,world;
var ground;
function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var option={
    isStatic:true
  }

  var phys={
    restitution: 0.8
  }

  ground=Bodies.rectangle(200,390,200,20,option);
  World.add(world,ground);

  console.log(ground);
  console.log(ground.type)
  console.log(ground.position.x);
  console.log(ground.position.y);

  ball=Bodies.circle(200,150,20,phys);
  World.add(world,ball);




}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particle = null;
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground;
var score=0;
var count=0;
var maxTurns=5;
var gameState="start";

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,800,800,20);
  for (var k = 0; k <=width; k = k + 80)
  { divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); }
  //plinkos: stationary pegs in four rows at the top
  for (var j = 75; j <=width; j=j+50)
  { plinkos.push(new Plinko(j,75)); }
  for (var j = 100; j <=width; j=j+50)
  { plinkos.push(new Plinko(j,175)); }
  for (var j = 75; j <=width; j=j+50)
  { plinkos.push(new Plinko(j,275)); }
  for (var j = 100; j <=width; j=j+50)
  { plinkos.push(new Plinko(j,375)); }
}

function draw() {
  background(0);
  fill("white");
  textSize(35);
  text("Score: "+score,20,40);
  textSize(20);
  text("Turns left: "+(maxTurns-count),620,40);
  textSize(35);
  text("500",15,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",330,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("200",730,550)
  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++)
  { plinkos[i].display(); }

  if(particle!==null){
    particle.display();
    if(particle.body.position.y>760){
      //score depends on which slot (x position) the ball landed in
      var x=particle.body.position.x;
      if(x<320){
        score=score+500;
      }
      else if(x<560){
        score=score+100;
      }
      else{
        score=score+200;
      }
      World.remove(world, particle.body);
      particle=null;
      if(count>=maxTurns){
        gameState="end";
      }
    }
  }

  for (var j = 0; j < divisions.length; j++)
  { divisions[j].display(); }

  if(gameState=="end"){
    fill("white");
    textSize(50);
    text("Game Over",270,250)
  }
}

function mousePressed() {
  //drop one ball at a time, up to maxTurns
  if(gameState!=="end" && particle===null && count<maxTurns) {
    count++;
    particle=new Particle(constrain(mouseX,15,width-15), 10, 10);
  }
}

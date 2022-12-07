
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,300,50,45,2)

  box2 = new Box(200,250,60,27,-1)

  box3 = new Box(250,100,80,76,3)
}

function draw() 
{
  background(220);
  box1.show() 
  box1.move()
  fill("pink")
  
  box2.show() 
  box2.move()
  fill ("lightgreen")

  box3.show() 
  box3.move()
  fill ("lightblue")


}



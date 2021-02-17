class paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2			
			}
            this.body=Bodies.circle(x,y,20,options); // determining the shape of the body
            this.diameter=40;
            World.add(world,this.body); // adding the body to the world
            this.paperImg=loadImage("paper.png")
      }
      display(){
          var pose= this.body.position
          var angle= this.body.angle
          push();
          translate(pose.x,pose.y)
          rotate(angle)
          
          imageMode(CENTER);
          
          image(this.paperImg,0,0,50,50);
        pop()
      }
  }
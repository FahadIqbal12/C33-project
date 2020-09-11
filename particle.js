class Particle
{
	constructor(x,y)
	{
		var options={
            isStatic:false,
            restitution:1
			}
		this.x=x;
		this.y=y;
		this.r=10;
		this.color=color(random(0, 255), random(0, 255), random(0, 255));
	
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     fill(this.color)
     ellipse(0,0,10,10);
     pop();





  }
			
	

}
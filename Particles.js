class Particles{

    constructor(x,y,width,height)
        {
           var options=
           {
             isStatic=true  
           }
              this.body=Bodies.circle(x,y,this.r,options);
              this.width=width;
              this.height=height;
              this.color=color(random(0,255),random(0,255),random(0,255));
              World.add(world,this.body);
        }
        display()
        {
            var pos=this.body.position;
            push();
            ellipseMode(CENTER);
            strokeWeight(4);
            fill(150);
            ellipse(this.body.positionx,this.body.position.y,this.width,this.height);

            pop();
        }
    
}
class Stone
{
    constructor(x,y,width,height,angle)
    {
        var option={
            
            'restitution' : 0.4,
            'friction': 20,
            'density': 2
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
       // Matter.Body.setAngle(this.body,angle)
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
       // var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill ("gray")
       // rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}
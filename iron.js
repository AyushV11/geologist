class Iron
{
    constructor(x,y,width,height)
    {
        var option={
            
            'restitution' : 0.4,
            'friction': 20,
            'density': 4
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        //Matter.Body.setAngle(this.body,angle)
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill ("red")
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}
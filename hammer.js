class Hammer
{
    constructor(x,y,width,height)
    {
        var option={
           isStatic: true
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("yellow")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        pop();     
    }
}
class Rubber
{
    constructor(x,y,radius)
    {
        var option={
            
            'restitution' : 0.4,
            'friction': 20,
            'density': 1
        }
        this.body=Matter.Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
        //Matter.Body.setAngle(this.body,angle)
        this.radius=radius
        this.debug=true
        
    }

    display()
    {
        var pos=this.body.position;
       // var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
       // this.body.debug=true
        fill ("blue")
        //rotate(angle);
       // rectMode(CENTER);
        circle(0,0,this.radius);
        pop();     
    }
}
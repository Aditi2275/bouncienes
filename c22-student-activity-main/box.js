class Box
{

    constructor(x,y,width,height)
{
    this.width=width;
    this.height=height;
    var body_option={
        restitution:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,body_option);

    World.add(world,this.body);
}
display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.widht,this.height);
        fill(255);
        pop();
    }   

};
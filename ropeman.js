class ropeman{
    constructor(x,y){
        var options={
            isStatic:false,
            density:1,
            frictionAir:1,
            friction:0.5,
        }
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=100
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
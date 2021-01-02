class blocks{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            density:1
           
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();
        fill("brown")
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
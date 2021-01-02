class rope{
constructor(body1,body2){
var options={
    stiffness:0.4,
    length:10,
    bodyA:body1,
    bodyB:body2
}
   this.rope=Constraint.create(options)
   World.add(world,this.rope);
}
display(){
    if(this.rope.bodyA){
  var pointA=this.rope.bodyA.position
 var pointB=this.rope.bodyB.position;
 line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
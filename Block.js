class block{
constructor(x,y){
var options={
'restitution':0.9,
'friction':1.0,
'density':1.0

}
this.body=Bodies.rectangle(x,y,50,30,options);
this.width=50;
this.height=30;
World.add(world,this.body)


}

display(){
var pos=this.body.position;
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)

}


}
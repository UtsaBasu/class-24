class Log{
    constructor(x,y,height,angle){
    var options={
        restituion:0.5,
        friction:2,
        density:1
    }
    this.log=Bodies.rectangle(x,y,20,height,options);
    Matter.Body.setAngle(this.log,angle);
    World.add(world,this.log);
    this.width=20;
    this.height=height;
    }
   display(){
      push(); 
      translate(this.log.position.x,this.log.position.y);
      rotate(this.log.angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0,0,this.width,this.height);
      
      pop();
   }
}   
  
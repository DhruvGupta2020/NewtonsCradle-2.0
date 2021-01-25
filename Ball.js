class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:1,
             friction:0,
              density:0.5
          }
            this.body = Bodies.circle(x,y,radius,options);
            this.radius = radius;
            this.image = loadImage("ball.png")
            World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        fill("cyan"); 
        image(this.image,-45,-20,this.radius*3,this.radius*3);
        pop();
    }
}
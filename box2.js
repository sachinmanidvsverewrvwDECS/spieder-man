class BoX{
    constructor(x,y,width,height){
        var pue={
            'restitution':0.1,
            'friction':0.1,
            'density':0.1

        }

        this.body=Bodies.rectangle(x,y,width,height,pue);
        this.width=width
        this.height=height
        this.image = loadImage("pump0.png");
        World.add(world,this.body)
        

    }

    display(){
        //var angle=this.body.angle
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        //camera.x=this.body.position.x
        //this.body.velocityY=this.body.velocityY+0.8
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


    }
}
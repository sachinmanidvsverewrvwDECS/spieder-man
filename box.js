class Box{
    constructor(x,y,width,height){
        var pue={
            'restitution':0.2,
            'friction':0.1,
            'density':0.3

        }

        this.body=Bodies.rectangle(x,y,width,height,pue);
        this.width=width
        this.height=height
       // this.image = loadImage("hhh1.png");
        World.add(world,this.body)
        

    }

    display(){
        var pos =this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
       // camera.x=this.body.position.x
        //this.body.velocityY=this.body.velocityY+0.8
        rectMode(CENTER);
        rect(this.body.pos.x, this.body.pos.y);
        //image(this.image, 0, 0, this.width, this.height);
        pop();


    }
}
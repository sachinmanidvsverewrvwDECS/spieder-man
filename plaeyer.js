class Bo{
    constructor(x,y,width,height){
        var pue={
            'restitution':0.1,
            'friction':0.1,
            'density':0.1

        }

        this.body=Bodies.rectangle(x,y,width,height,pue);
        this.width=width
        this.height=height
       // this.image = loadAnimation();
        World.add(world,this.body)
        

    }

    display(){
        //var angle=this.body.angle
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        if(keyDown(RIGHT_ARROW)){
            this.body.position.x=this.body.position.x+2
        }
        if(keyDown(LEFT_ARROW)){
            this.body.position.x=this.body.position.x-2
        }
        if(keyDown("space")){
            this.body.position.y=this.body.position.y-2
        }
       // camera.x=this.body.position.x
        //this.body.velocityY=this.body.velocityY+0.8
        rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        pop();


    }
}
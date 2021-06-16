class Player{
    constructor(x,y,width,height){
        this.spt = createSprite(x,y,width,height);
        this.spt.addAnimation("car",carAnimation);
        this.spt.addAnimation("player",playerAnimation1);
        this.spt.scale = 0.4;
    }
    moveLeft(){
        this.spt.x = this.spt.x -5;
    }
    moveRight(){
        this.spt.x = this.spt.x + 5;
    }
    up(){
        this.spt.y = this.spt.y -5;
    }
    down(){
        this.spt.y = this.spt.y + 5;
    }
}
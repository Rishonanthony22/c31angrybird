class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    

    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos=[this.body.position.x,this.body.position.y];
      this.trajectory.push(pos); 
    }
    
    var num;
    for(num=0;num<this.trajectory.length;num++){
      image(this.smokeImg,this.trajectory[num][0],this.trajectory[num][1]);
    }
  }
}

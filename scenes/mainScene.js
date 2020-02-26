export default class MainScene extends Phaser.Scene {
  
    constructor() {
      super({ key: 'MainScene' });
    }
  
    preload(){
      this.load.image("space", "images/club backgound.jpg");
    }
  
    create() {
      this.exampleObject = new ExampleObject(this, 0, 0);
      this.image = 
    }
  
    update() {
    }
  }
  
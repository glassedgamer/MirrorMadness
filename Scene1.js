class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    WebFont.load({ custom: {
        families: ['Press Start 2P'],
        urls: ['fonts.css']
      }
    });

    this.load.image("background", "Assets/Images/background.png");
    this.load.spritesheet("ship", "Assets/spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship2", "Assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("ship3", "Assets/spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("explosion", "Assets/spritesheets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("power-up", "Assets/spritesheets/power-up.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("player", "Assets/Images/Player.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("lazer", "Assets/Images/Lazer.png", {
      frameWidth: 16,
      frameHeight: 16
    });

  }
  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame")

    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });
    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });
  }
}

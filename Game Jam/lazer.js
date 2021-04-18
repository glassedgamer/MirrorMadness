class Lazer extends Phaser.GameObjects.Sprite {
    constructor(scene) {

        var x = scene.player.x;
        var y = scene.player.y - 16;

        super(scene, x, y, "lazer");
        scene.add.existing(this);

        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;

    }

    update() {
        if(this.y < 32) {
            this.destroy();
        }
    }
}
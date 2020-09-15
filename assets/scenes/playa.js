class Playa extends Phaser.GameObjects.Sprite {

	/**
	 * Playa
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame);
		this.scene.physics.add.existing(this);
		this.body.setCollideWorldBounds(true);
	
	}
	
	
}

Phaser.GameObjects.GameObjectFactory.register("playa", function (x, y, texture, frame) {
	
	var sprite = new Playa(this.scene, x, y, texture, frame);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
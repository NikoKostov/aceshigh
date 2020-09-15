class Enemigo extends Phaser.GameObjects.Sprite {

	/**
	 * Enemigo
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
		
		
	}
	chezva (){
		this.destroy();
	}
	
}

Phaser.GameObjects.GameObjectFactory.register("enemigo", function (x, y, texture, frame) {
	
	var sprite = new Enemigo(this.scene, x, y, texture, frame);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
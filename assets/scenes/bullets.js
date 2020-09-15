

class Bullets extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
 
		// Initialize the group
		this.createMultiple({
			classType: Bullet, // This is the class we create just below
			frameQuantity: 100, // Create 100 instances in the pool
			active: false,
			visible: false,
			key: 'bullet',
			setXY: {
        		x:-112,
        		y:0,
        
    		}
		})
		
	}
	shootBullet(x, y) {
		// Get the first available sprite in the group
		const bullet = this.getFirstDead(false);
		if (bullet) {
			bullet.fire(x, y);
		}
	}
 
}


class Bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'textures', 'bullet1');
	}
	fire(x, y) {
		this.body.reset(x, y);
 
		this.setActive(true);
		this.setVisible(true);
 		this.setScale(0.5);
		this.setVelocityY(-1100);
	}
	preUpdate(time, delta) {
		super.preUpdate(time, delta);
 
		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
			this.body.reset
		}
	}
}

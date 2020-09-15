
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var mars = this.add.tileSprite(0.0, 800.0, 300.0, 10000.0, "mars");
		mars.setOrigin(0.25, 1.0);
		mars.setScale(2.0, 1.0);
		
		var playa = this.add.playa(150.0, 412.0, "textures", "planeP");
		
		this.fEnemies = this.add.group([  ]);
		
		this.fMars = mars;
		/** @type {Playa} */
		this.fPlaya = playa;
		
	}
	
	
	
	
	/* START-USER-CODE */
	
	
	create() {
		this._create();
		this.emitter = Poshta.getInstance();
		
		this.cursors = this.input.keyboard.createCursorKeys();
		this.bulletGroup = new Bullets(this);
		
		this.explosionSnd = this.sound.add('boom')
		this.blasterSnd = this.sound.add('mg');
//		this.scene.launch('joystick').bringToTop("joystick");
	
		this.enemigo = this.fEnemies.getChildren();
		this.physics.add.overlap(this.bulletGroup, this.fEnemies, this.bulletImpact, null, this);
//		var camera = this.cameras.main;
//		camera.startFollow(this.fPlaya);
//		camera.setFollowOffset(0, 150);
		
//		var top = scene.world.bounds.top;
//		top = false;
		
		
		//Playa
		
//		this.fPlaya.setScale(0.3)
		
		this.shootBullet()
		
		
		
		//Enemigosi
		
		for (var i = 0; i < 200; i++){
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
       		let enemy = this.add.enemigo(Phaser.Math.Between(0, this.game.config.width), Phaser.Math.Between(-3500, 0) , "textures", "planeG");
//			enemy.setScale(0.3,0.3)
			this.fEnemies.add(enemy);
			
    	}
		this.setListeners();
	}

	update() {
		
		// Klaviatura
		if (this.cursors.left.isDown) {
	//		this.fPlaya.x -= 5;
			this.fPlaya.body.setVelocityX(-90);
	//		this.fPlaya.anims.play('animeLeft', false);
		} else if (this.cursors.right.isDown) {
	//		this.fPlaya.x += 5;
			this.fPlaya.body.setVelocityX(90);
		//	this.fPlaya.anims.play('animeRight', false);
		} 
		
		if (this.cursors.up.isDown) {
	//		this.fPlaya.y -= 5;
			this.fPlaya.body.setVelocityY(-90);
		} else if (this.cursors.down.isDown) {
	//		this.fPlaya.y += 5;
			this.fPlaya.body.setVelocityY(40);
		}
		
		if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
				this.shootBullet();
		}
		
		//mi6ka
		
		this.input.on('pointermove', pointer => {
		    var touchX = pointer.x;
		    var touchY = pointer.y;
		 //   console.log(this.fPlaya)
			this.fPlaya.x = touchX;
			this.fPlaya.y = touchY - 20;
		});
	
		
		
		
		Phaser.Actions.IncY(this.fEnemies.getChildren(), 2);
		this.fMars.tilePositionY -= 3;
		
		
		
	}
	setListeners(){
		
		this.emitter.on('CONTROLS', this.actions.bind(this));
		
	}
	


	actions(param){
		switch(param){
			case 'left': this.fPlaya.body.setVelocityX(-90);
			break;
			case 'right': this.fPlaya.body.setVelocityX(90);
			break;
			case 'up': this.fPlaya.body.setVelocityY(-90);
			break;
			case 'down': this.fPlaya.body.setVelocityY(90);
			break;
			case 'noKey': this.fPlaya.body.setVelocityY(0),this.fPlaya.body.setVelocityX(0);
		}
		
	/*	if(param == 'left'){
			this.fPlaya.body.setVelocityX(-90)	
		} else if (param == 'right') {
			this.fPlaya.body.setVelocityX(90)
		} else if (param == 'up') {
			this.fPlaya.body.setVelocityY(-90)
		} else if (param == 'down') {
			this.fPlaya.body.setVelocityY(90)
		} else if (param == 'stop'){
			this.fPlaya.body.setVelocityY(0);
			this.fPlaya.body.setVelocityX(0);
		}*/
		
	}


	shootBullet() {
		const shoot = () => {
		this.bulletGroup.shootBullet(this.fPlaya.x - 9, this.fPlaya.y - 20);
		this.bulletGroup.shootBullet(this.fPlaya.x + 9, this.fPlaya.y - 20);
		this.blasterSnd.play();
	//	console.log(1)
		}
		this.time.addEvent({
		    delay: 130,                // ms
		    callback: shoot,
		    //args: [],
		    callbackScope: this,
			loop: true
		  			
		});
	}
	
	bulletImpact(enemy, projectile){
		if (projectile.active = true) {
			enemy.play('BOOM', false);
			this.explosionSnd.play();
			enemy.once('animationcomplete', () => {
    	 		enemy.body.destroy();
			})
		projectile.body.reset(-112,0)
		projectile.setActive(false);
		projectile.setVisible(false);
		}
		
	}
	
	
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

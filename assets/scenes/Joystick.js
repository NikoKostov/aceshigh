'use strict'
// You can write more code here

/* START OF COMPILED CODE */

class Joystick extends Phaser.Scene {
	
	constructor() {
	
		super("joystick");
		
	}
	
	_create() {
	
		
	}
	
	/* START-USER-CODE */
	// Write your code here.
	create() {
		this._create();
		this.emitter = Poshta.getInstance();
		this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
                x: 250,
                y: 400,
                radius: 20,
                base: this.add.circle(0, 0, 30, 0x888888),
                thumb: this.add.circle(0, 0, 20, 0xcccccc),
                // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
                // forceMin: 16,
                // enable: true
            })
            .on('update', this.dumpJoyStickState, this);

       this.dumpJoyStickState();
		
	}
	dumpJoyStickState() {
		var cursorKeys = this.joyStick.createCursorKeys();
		for (var name in cursorKeys) {
			if (cursorKeys[name].isDown) {
        		this.emitter.emit('CONTROLS', name);
			} else if (this.joyStick.noKey){
				this.emitter.emit('CONTROLS', 'noKey');
			}
		}
 	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here



/**
 *
 */
let instance = false;


class Poshta extends Phaser.Events.EventEmitter	{
	
	constructor() {
		super();
		if (instance == false) {
			instance = this;
		}
	}
	static getInstance() {
		if(instance == false) {
			instance = new Poshta()
		}
		return instance;
	}
	
}


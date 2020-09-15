
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "ACESHIGH",
    "width": 300,
    "height": 450,
    "type": Phaser.AUTO,
    "backgroundColor": "#88F",
    "parent": "game-container",
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    },
	"physics": {
		"default": "arcade",
		arcade: {
   //  	gravity: { y: 300 },
      	debug: false
    	}
	}
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
		this.load.audio('mg', 'assets/audio/mg.wav');
		this.load.audio('boom', 'assets/audio/boom.wav');
		var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
        this.load.plugin('rexvirtualjoystickplugin', url, true);
	}

	create() {
		this.scene.start("Scene1");
	}

}

var express = require('express')
var app = new express.Router()
var robot = require('robotjs');
var exec = require('child_process').exec;

app.get('/', function (req, res){
	var shortcuts = require('../configs/shortcuts.json')
	var requestedShortcut = req.query.key;

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i];
		if (shortcut.label == requestedShortcut) {
			if (shortcut.keys){
				console.log("Keys:")
				for (var z = 0; z < shortcut.keys.length; z++){
					var batch = shortcut.keys[z]

					for (var m = 0; m < batch.length; m++) {
						console.log("K_DN: " + batch[m])
						robot.keyToggle(batch[m],'down')
					}

					for (var n = 0; n < batch.length; n++) {
						console.log("K_UP: " + batch[n])
						robot.keyToggle(batch[n],'up')
					}
				}
			}

			if (shortcut.exec) {
				console.log("EXEC: " +shortcut.exec)
				exec(shortcut.exec)
			}
		}
	}

	res.end(JSON.stringify({
		success: true
	}));
})

module.exports = app

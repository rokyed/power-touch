const express = require('express')
const app = new express.Router()
const robot = require('robotjs');
const executor = require('./executor.js')

app.get('/', function (req, res){
	let shortcuts = require('../configs/shortcuts.json')
	let requestedShortcut = req.query.key;

	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i];
		if (shortcut.label == requestedShortcut && !shortcut.type) {
			if (shortcut.keys){
				console.log("Keys:")
				for (let z = 0; z < shortcut.keys.length; z++){
					let batch = shortcut.keys[z]

					for (let m = 0; m < batch.length; m++) {
						console.log("K_DN: " + batch[m])
						robot.keyToggle(batch[m],'down')
					}

					for (let n = 0; n < batch.length; n++) {
						console.log("K_UP: " + batch[n])
						robot.keyToggle(batch[n],'up')
					}
				}
			}

			if (shortcut.exec) {
				executor.run(shortcut.exec, shortcut.execArgs)
			}
		}
	}

	res.end(JSON.stringify({
		success: true
	}));
})

module.exports = app

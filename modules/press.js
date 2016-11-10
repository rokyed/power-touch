const express = require('express')
const app = new express.Router()
const executor = require('./executor.js')

app.get('/', function (req, res){
	let shortcuts = require('../configs/shortcuts.json')
	let requestedShortcut = req.query.key;

	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i];
		
		if (shortcut.label == requestedShortcut && !shortcut.type) {
			if (shortcut.keys)
				executor.press(shortcut.keys)

			if (shortcut.exec)
				executor.run(shortcut.exec, shortcut.execArgs)
		}
	}

	res.end(JSON.stringify({
		success: true
	}));
})

module.exports = app

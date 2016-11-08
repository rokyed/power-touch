const express = require('express')
const app = new express.Router()
const robot = require('robotjs')
const executor = require('./executor.js')

app.get('/', function (req, res){
	let shortcuts = require('../configs/shortcuts.json')
	let requestedShortcut = req.query.key;
	let value = req.query.value;

	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i];
		if (shortcut.label == requestedShortcut && shortcut.type == "slider") {
			if (value <= shortcut.maxValue && value  >= shortcut.minValue && shortcut.exec) {

				executor.run(shortcut.exec, shortcut.execArgs, {
					value: value
				})
			}
		}
	}

	res.end(JSON.stringify({
		success: true
	}));
})

module.exports = app

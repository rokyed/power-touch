const express = require('express')
const app = new express.Router()

app.get('/', function (req, res){
	let buttons = []
	let shortcuts = require('../configs/shortcuts.json')

	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i]
		let icon = shortcut.icon ? `./resources/icons/${shortcut.icon}` : ''

		buttons.push({
			action: shortcut.label,
			icon: icon,
			title: shortcut.title,
			kType: shortcut.type ? shortcut.type : "button",
			minValue: shortcut.minValue ? shortcut.minValue : "",
			maxValue: shortcut.maxValue ? shortcut.maxValue : "",
		})
	}

	res.end(JSON.stringify(buttons))
})

module.exports = app

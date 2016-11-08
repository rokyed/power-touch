var express = require('express')
var app = new express.Router()

app.get('/', function (req, res){
	var buttons = []
	var shortcuts = require('../configs/shortcuts.json')

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i]
		var icon = shortcut.icon ? `./resources/icons/${shortcut.icon}` : ''

		buttons.push({
			action: shortcut.label,
			icon: icon,
			title: shortcut.title
		})
	}

	res.end(JSON.stringify(buttons))
})

module.exports = app

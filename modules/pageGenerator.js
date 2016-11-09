const express = require('express')
const app = new express.Router()
let context = ""

app.get('/get', function (req, res){
	let buttons = []
	let shortcuts = require('../configs/shortcuts.json')

	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i]
		let icon = shortcut.icon ? `./resources/icons/${shortcut.icon}` : ''

		if(! context || context == shortcut.context)
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

app.get('/values', function (req, res) {
	let buttons = []
	let shortcuts = require('../configs/shortcuts.json')

	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i]

		buttons.push({
			action: shortcut.label,
			value: ""
		})
	}

	res.end(JSON.stringify(buttons))
})

app.get('/context', function(req, res) {
	let options = ["", "__reset"]
	let shortcuts = require('../configs/shortcuts.json')
	for (let i = 0; i < shortcuts.length; i ++) {
		let shortcut = shortcuts[i]

		if (shortcut.context && options.indexOf(shortcut.context) == -1)
			options.push(shortcut.context)
	}

	res.end(JSON.stringify(options))
})


app.get('/set', function (req, res){
	context = req.query.context

	if (context == "__reset")
		context = ""


	res.end(JSON.stringify({
		success: true
	}))
})

module.exports = app

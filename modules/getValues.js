const express = require('express')
const app = new express.Router()
const executor = require('./executor.js')

app.get('/', function (req, res){
	var shortcuts = require('../configs/shortcuts.json')
	var buttonValues = []

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i]

		if (shortcut.feedbackCommand) {

		}
	}

	res.end(JSON.stringify(buttonValues))
})

module.exports = app

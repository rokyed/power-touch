var express = require('express')
var app = new express.Router()
var robot = require('robotjs');
var exec = require('child_process').exec;

app.get('/', function (req, res){
	var shortcuts = require('../configs/shortcuts.json')
	var requestedShortcut = req.query.key;
	var value = req.query.value;

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i];
		if (shortcut.label == requestedShortcut && shortcut.type == "slider") {
			if (value <= shortcut.maxValue && value  >= shortcut.minValue && shortcut.exec) {
				console.log("EXEC: " +shortcut.exec)
				exec(shortcut.exec.replace('${value}', value))
			}
		}
	}

	res.end(JSON.stringify({
		success: true
	}));
})

module.exports = app

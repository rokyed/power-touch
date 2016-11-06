var express = require('express')
var app = express()
var cfg = require('./config.json')
var bodyParser = require('body-parser')
var robot = require('robotjs');

app.use(bodyParser.json())
app.use('/resources', express.static(__dirname + '/resources'));


app.get('/', function (req, res) {

  	res.sendFile(__dirname + '/index.html');
})

app.get('/keys', function(req, res) {
	var buttons = [];
	var shortcuts = require('./shortcuts.json');

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i];

		buttons.push({
			action: shortcut.label,
			icon: `./resources/icons/${shortcut.icon}`,
			title: shortcut.title
		})
	}

	res.end(JSON.stringify(buttons))
})


app.get('/press', function (req, res){
	var shortcuts = require('./shortcuts.json');
	var requestedShortcut = req.query.key;
	// to add here a validation system with session

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i];

		if (shortcut.label == requestedShortcut) {
			for (var m = 0; m < shortcut.keys.length; m++) {
				robot.keyToggle(shortcut.keys[m],'down');
			}
			for (var n = 0; n < shortcut.keys.length; n++) {
				robot.keyToggle(shortcut.keys[n],'up');
			}
		}
	}

	res.end(JSON.stringify({
		success: true
	}));
})

app.get('/keep-alive', function (req, res) {

})

app.listen(cfg.listenPort, function () {
  console.log('Example app listening on port '+ cfg.listenPort )
})

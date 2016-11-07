var express = require('express')
var app = express()
var cfg = require('./config.json')
var bodyParser = require('body-parser')
var robot = require('robotjs');
var exec = require('child_process').exec;

app.use(bodyParser.json())
app.use('/resources', express.static(__dirname + '/resources'));


app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/index.html');
})

app.get('/keys', function(req, res) {
	var buttons = [];
	var shortcuts = require(cfg.shortcuts);

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i];
		var icon = shortcut.icon ? `./resources/icons/${shortcut.icon}` : '';

		buttons.push({
			action: shortcut.label,
			icon: icon,
			title: shortcut.title
		})
	}

	res.end(JSON.stringify(buttons))
})


app.get('/press', function (req, res){
	var shortcuts = require(cfg.shortcuts);
	var requestedShortcut = req.query.key;
	// to add here a validation system with session

	for (var i = 0; i < shortcuts.length; i ++) {
		var shortcut = shortcuts[i];
		if (shortcut.label == requestedShortcut) {
			if (shortcut.keys){
				console.log("Keys:")
				for (var z = 0; z < shortcut.keys.length; z++){
					var batch = shortcut.keys[z];

					for (var m = 0; m < batch.length; m++) {
						console.log("K_DN: " + batch[m]);
						robot.keyToggle(batch[m],'down');
					}

					for (var n = 0; n < batch.length; n++) {
						console.log("K_UP: " + batch[n]);
						robot.keyToggle(batch[n],'up');
					}
				}
			}

			if (shortcut.exec) {
				console.log("EXEC: " +shortcut.exec);
				exec(shortcut.exec);
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

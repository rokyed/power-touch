// npm modules
var express = require('express')
var auth = require('http-auth');
var bodyParser = require('body-parser')

//local modules
var press = require('./modules/press.js')
var notifier = require('./modules/notifier.js')

// configs
var cfg = require('./configs/main.json')

if (!cfg) {
	return notifier.notify('missingConfig', 'main.json')
}

// misc
var app = express()
var basic = auth.basic({
    realm: "Power Touch.",
    file: __dirname + "/configs/auth.htpasswd"
});

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(auth.connect(basic));
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/press', press)

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

app.listen(cfg.listenPort, function () {
  console.log('Example app listening on port '+ cfg.listenPort )
})

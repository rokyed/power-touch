var cfg = require('../configs/authentification.json');
var notifier = require('./notifier.js');

if (!cfg)
	notifier.notify('missingConfig', 'authentification.json')

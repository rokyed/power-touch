// npm modules
var express = require('express')
var auth = require('http-auth');
var bodyParser = require('body-parser')

//local modules
var press = require('./modules/press.js')
var slide = require('./modules/slide.js')
var pageGenerator = require('./modules/pageGenerator.js')

// configs
var cfg = require('./configs/main.json')

// misc
var app = express()
var basic = auth.basic({
    realm: "Power Touch.",
    file: __dirname + "/configs/auth.htpasswd"
});

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(auth.connect(basic));
app.use('/', express.static(__dirname + '/interface'));
app.use('/press', press)
app.use('/slide', slide)
app.use('/keys', pageGenerator)

app.listen(cfg.listenPort, function () {
  console.log('Example app listening on port '+ cfg.listenPort )
})

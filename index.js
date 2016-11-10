// npm modules
const express = require('express')
const auth = require('http-auth');
const bodyParser = require('body-parser')

//local modules
const actions = require('./modules/actions.js')
const pageGenerator = require('./modules/pageGenerator.js')

// configs
const cfg = require('./configs/main.json')

// misc
const app = express()
const basic = auth.basic({
    realm: "Power Touch.",
    file: __dirname + "/configs/auth.htpasswd"
});

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(auth.connect(basic));
app.use('/', express.static(__dirname + '/interface'));
app.use('/do-action', actions)
app.use('/keys', pageGenerator)

app.listen(cfg.listenPort, function () {
  console.log('Example app listening on port '+ cfg.listenPort )
})

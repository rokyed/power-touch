var childProcess = require('child_process')
var utils = require('./utils.js')

module.exports = {
	run: function (command, argx, values) {
		if (values)
			argx = utils.mergeArgsWithValues(argx, values)

		console.log("spawn:")
		console.log(command)
		console.log("arguments:")
		console.log(argx)
		childProcess.spawn(command, argx)
	}
};

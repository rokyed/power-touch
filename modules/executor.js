var childProcess = require('child_process')
var utils = require('./utils.js')
const robot = require('robotjs')

module.exports = {
	run(command, argx, values) {
		if (values)
			argx = utils.mergeArgsWithValues(argx, values)

		console.log("spawn:")
		console.log(command)
		console.log("arguments:")
		console.log(argx)
		childProcess.spawn(command, argx)
	},

	press(batches) {
		console.log("Keys:")
		for (let z = 0; z < batches.length; z++){
			let batch = batches[z]

			for (let m = 0; m < batch.length; m++) {
				console.log("K_DN: " + batch[m])
				robot.keyToggle(batch[m],'down')
			}

			for (let n = 0; n < batch.length; n++) {
				console.log("K_UP: " + batch[n])
				robot.keyToggle(batch[n],'up')
			}
		}
	},


};

module.exports = {
	notify: function (typeOfNotification, extra) {
		var error = ""
		var hint = ""

		switch (typeOfNotification) {
			case "missingConfig":
				error = `missing APP/configs/${extra}`
				hint = `You can copy/rename the example config and modify accordingly.`
				break
		}

		console.log(error)
		console.log(hint)

		return false
	}
}

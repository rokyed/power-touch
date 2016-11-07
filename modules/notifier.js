module.exports = {
	notify: function (typeOfNotification, extra) {
		var error = "";
		var hint = "";

		switch (typeOfNotification) {
			"missingConfig":
				error = `missing ~/configs/${extra}`;
				hint = `You can copy/rename the example config and modify accordingly.`
				break;
		}

		console.log(error);
		console.log(hint);
	}
}

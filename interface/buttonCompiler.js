;(function() {
	window["LOAD_STUFF"] = function (noContext) {
		AjaxRequest({
			url: 'keys/get',
			success: function (req) {
				var buttons = JSON.parse(req);
				var div = document.querySelector('.buttons');
				var html = "";

				for (var i = 0; i < buttons.length; i++) {
					var button = buttons[i];
					html += window['APPLYTEMP'](button.kType, button);
				}

				div.innerHTML = html;

			}
		});

		if(!noContext)
			AjaxRequest({
				url: 'keys/context',
				success: function (req) {
					var div = document.querySelector('.context-options');
					var options = JSON.parse(req);
					var html = "";

					for (var i = 0; i < options.length; i++) {
						html += window['APPLYTEMP']("contextOption", {value: options[i]});
					}

					div.innerHTML = html;
				}
			});
	};

	window.LOAD_STUFF();
	// window.setInterval(function () {
	// 	window.LOAD_STUFF(true);
	// }, 2000);

	// make url bar dissapear in chrome
	window.scrollTo(0,1);
})();

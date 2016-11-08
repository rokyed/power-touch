;(function() {
	AjaxRequest({
		url: 'keys',
		success: function (req) {
			var buttons = JSON.parse(req);
			var div = document.querySelector('.buttons');
			var html = "";

			for (var i = 0; i < buttons.length; i++) {
				var button = buttons[i];
				html += window['APPLYTEMP'](button.kType, button);
				div.innerHTML = html;
			}

		}
	});



	// make url bar dissapear in chrome
	window.scrollTo(0,1);
})();

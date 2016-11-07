;(function() {
	AjaxRequest({
		url: 'keys',
		success: function (req) {
			var buttons = JSON.parse(req);
			var div = document.querySelector('.buttons');

			for (var i = 0; i < buttons.length; i++) {
				var button = buttons[i];
				var element = document.createElement('div');
				element.classList.add('button');
				element.style.backgroundImage = "url('"+button.icon+"')";
				element.setAttribute('data-action', button.action);
				element.setAttribute('onclick', 'BUTTONACCESS(this)');
				element.innerHTML = button.title;

				div.appendChild(element);
			}

		}
	});
	
	// action function required for buttons
	window['BUTTONACCESS'] = function (e) {
		AjaxRequest({
			url: "./press?key="+e.getAttribute('data-action')
		});
	};

	// make url bar dissapear in chrome
	window.scrollTo(0,1);
})();

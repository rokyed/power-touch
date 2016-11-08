;(function() {
	// action function required for buttons
	window['BUTTONACCESS'] = function (e) {
		AjaxRequest({
			url: "./press?key="+e.getAttribute('data-action')
		});
	};
	window['SLIDERONCHANGE'] = function (e) {
		AjaxRequest({
			url: ['./slide?key=', e.getAttribute('data-action'), '&value=', e.value].join('')
		});
	};
})();

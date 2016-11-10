;(function() {
	window['BUTTONACTIONS'] = {
		buttonAccess: function (e) {
			AjaxRequest({
				url: "./do-action?key="+e.getAttribute('data-action')
			});
		},
		sliderOnChange: function(e) {
			AjaxRequest({
				url: ['./do-action?key=', e.getAttribute('data-action'), '&value=', e.value].join('')
			});
		},
		setContext: function(e) {
			AjaxRequest({
				url: ['./keys/set?context=', e.value].join(''),
				success: function() {
					window.LOAD_STUFF();
				}
			});
		}
	}
})();

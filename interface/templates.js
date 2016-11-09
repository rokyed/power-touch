;(function() {
	window['TEMPLATES'] = {
		"button": [
			'<div class="button" data-action="${action}" style="background-image:url(${icon})" onclick="BUTTONACTIONS.buttonAccess(this)">',
				'${title}',
			'</div>'
		],
		"slider":[
			'<div class="full-line">',
				'<label>',
					'<span>${title}</span>',
					'<input type="range" min="${minValue}" max="${maxValue}" data-action="${action}" oninput="BUTTONACTIONS.sliderOnChange(this)" />',
				'</label>',
			'</div>'
		],
		"contextOption": [
			'<option value="${value}">${value}</option>'
		]
	};
	window['APPLYTEMP'] = function (template, config) {
		var tmp = window['TEMPLATES'][template].join('');

		for (var k in config) {
			var regex = new RegExp("\\$\\{"+k+"\\}","g");
			tmp = tmp.replace(regex, config[k]);
			console.log(config[k]);
		}

		return tmp;
	};
})();

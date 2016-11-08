;(function() {
	window['TEMPLATES'] = {
		"button": [
			'<div class="button" data-action="${action}" style="background-image:url(${icon})" onclick="BUTTONACCESS(this)">',
				'${title}',
			'</div>'
		],
		"slider":[
			'<div class="full-line">',
				'<label>',
					'<span>${title}</span>',
					'<input type="range" min="${minValue}" max="${maxValue}" data-action="${action}" oninput="SLIDERONCHANGE(this)" />',
				'</label>',
			'</div>'
		]
	};
	window['APPLYTEMP'] = function (template, config) {
		var tmp = window['TEMPLATES'][template].join('');

		for (var k in config) {
			tmp = tmp.replace('${'+k+'}',config[k]);
		}

		return tmp;
	};
})();

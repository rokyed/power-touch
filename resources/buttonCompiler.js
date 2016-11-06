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
				element.innerHTML = button.title;
				element.addEventListener('click', function (e) {
					AjaxRequest({
						url: "./press?key="+e.target.getAttribute('data-action')
					});
				})
				div.appendChild(element);
			}

		}
	})
})();

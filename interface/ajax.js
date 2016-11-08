;(function(){
	window["AjaxRequest"] = function (config) {
		config.success = config.success || function() {}
		config.failure = config.failure || function() {}

		var xhr = new XMLHttpRequest();

		xhr.open("GET", config.url, true);
		xhr.addEventListener("error", config.failure);
		xhr.addEventListener("load", function() {
			config.success(xhr.responseText, config);
		});

		if(! config.query)
			return xhr.send(config.data);

		var items = [],
			data = config.query;

		for(var key in data)
			items.push(key + "=" + data[key]);

		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(items.join("&"));
	};
})();

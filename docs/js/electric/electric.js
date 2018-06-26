(function() {
	const electric = {
		init: function(json) {
			var data = JSON.parse(json);

			if (electric.currentPageComponent) {
				electric.currentPageComponent.dispose();
			}

			var getByPath = function(obj, path) {
				path = path.split('.');

				for (var i = 0; i < path.length; i++) {
					obj = obj[path[i]];
				};

				return obj;
			};

			if (window.pageComponent) {
				var page = getByPath(data.site, data.pageLocation);

				if (page) {
					electric.data = data;
					electric.page = page;

					electric.currentPageComponent = pageComponent.default.render(
						pageComponent.default, {
							element: '#pageComponent > *',
							page: electric.page,
							site: electric.data.site
						}
					);
				}

				if (electric.runCodeMirror) {
					electric.runCodeMirror();
				}
			}
		}
	};

	
		CodeMirror.defaults.lineNumbers = true;
		CodeMirror.defaults.matchBrackets = true;
		CodeMirror.defaults.readOnly = true;
		CodeMirror.defaults.tabindex = -1;
		CodeMirror.defaults.tabSize = 2;
		CodeMirror.defaults.theme = 'monokai';
		CodeMirror.defaults.viewportMargin = Infinity;

		var REGEX_LB = /&#123;/g;

		var REGEX_RB = /&#125;/g;

		electric.runCodeMirror = function() {
			var code = document.querySelectorAll('.code');

			for (var i = 0; i < code.length; i++) {
				// Workaround for soy issue where namespace and template tags are
				// rendered inside literal blocks
				var text = code[i].innerText
					.replace(REGEX_LB, '{')
					.replace(REGEX_RB, '}');

				var editor = CodeMirror(function(elt) {
					var preEl = code[i].parentNode;

					preEl.parentNode.appendChild(elt);
				}, {
					mode: code[i].getAttribute('data-mode') || '',
					value: text
				});
			}

			if (window.ElectricCodeTabs) {
				new window.ElectricCodeTabs();
			}
		};
	

	

	window.electric = electric;
})();

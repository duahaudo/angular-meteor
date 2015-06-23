angular
	.module('common.service')
	.service('logService', function() {
		return {
			// enrich text & write to console
			base: function(type, messages) {
				// if not debug mode, log nothing
				if (!config.debugMode) {
					return;
				}

				// do nothing if brower does not support
				if (!console || !console.log || !console[type]) {
					return;
				}

				var current = new Date(); // current date

				// write to console
				console.log('/---------------------------------------/'); // start log block
				console.log(current.toLocaleDateString() + ' ' + current.toLocaleTimeString()); // time stamp
				console.log('--');

				// log content
				if (_(messages).isArray()) {
					// write each item per line
					_(messages).each(function(message) {
						console[type](message);
					});
				} else {
					console[type](messages);
				}

				console.log('/---------------------------------------/'); // end log block
			},
			// log information, messages is string or array strings
			log: function(messages) {
				this.base('log', messages);
			},
			// log error, messages is string or array strings
			error: function(messages) {
				this.base('error', messages);
			},
			// log warning, messages is string or array strings
			warning: function(messages) {
				this.base('warn', messages);
			}
		};
	});
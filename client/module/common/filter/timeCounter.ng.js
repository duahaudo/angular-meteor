angular
	.module('common.filter')
	.filter('timeCounter', function() {
		return function(time) {
			var subtract = new Date().valueOf() - new Date().valueOf(time);
			return new Date(subtract).toLocaleDateString() + new Date(subtract).toLocaleTimeString();
		};
	});
angular
	.module('myApp', [
		"angular-meteor",
		'ui.router',
		'app.main'
	])
	.run(function($rootScope, $state) {
		// setup screen title
		$rootScope.screenTitle = 'Home';
		$rootScope.setScreenTitle = function(title) {
			$rootScope.screenTitle = title;
		};

		$state.go('main.home');
	});
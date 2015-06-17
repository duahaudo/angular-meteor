angular
	.module('myApp', [
		"angular-meteor",
		'ui.router',
		'app.main',
		'app.login'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!');
		$urlRouterProvider.otherwise('/login');
	})
	.run(function($rootScope, $state) {
		$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
			// We can catch the error thrown when the $requireUser promise is rejected
			// and redirect the user back to the main page
			/* 			if (error === "AUTH_REQUIRED") {
				$state.go('login');
			} */
		});

		// setup screen title
		$rootScope.screenTitle = 'Home';
		$rootScope.setScreenTitle = function(title) {
			$rootScope.screenTitle = title;
		};

		$state.go('wrapper.main.home');
	});
angular
	.module('myApp', [
		"angular-meteor",
		'ui.router',
		'app.main',
		'app.account',
		'app.login',
		'app.common'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!');
		$urlRouterProvider.otherwise('/sign-in');
	
		// for template
		$('html').addClass('app');
	})
	.run(function($rootScope, $state) {
		$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
			// We can catch the error thrown when the $requireUser promise is rejected
			// and redirect the user back to the main page
			if (error === "AUTH_REQUIRED") {
				$state.go('signin');
			}
		});
	
		// $state.go('wrapper.main.home');
	});
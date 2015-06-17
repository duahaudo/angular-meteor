angular
	.module('app.login', [
		
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'client/module/login/view/login.ng.html'
			});
	});
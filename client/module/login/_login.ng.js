angular
	.module('app.login', [
		'login.controller',
		'login.service'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider
			.state('signin', {
				url: '/sign-in',
				templateUrl: 'client/module/login/view/signin.ng.html',
				controller: 'login.signinController'
			})
			.state('signup', {
				url: '/sign-up',
				templateUrl: 'client/module/login/view/signup.ng.html',
				controller: 'login.signupController'
			});
	});
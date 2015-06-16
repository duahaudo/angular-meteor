angular
	.module('app.home', [
		'home.controller'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider
			.state('main.home', {
				url: '/home',
				templateUrl: 'client/module/home/view/home.ng.html',
				controller: 'homeController'
			});
	});
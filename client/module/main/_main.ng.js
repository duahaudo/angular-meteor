angular
	.module('app.main', [
		'app.parties',
		'app.message',
		'app.home'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!');
		var baseUrl = 'client/module/main/view/';
		$stateProvider
			.state('main', {
				url: '',
				abstract: true,
				views: {
					'header': {
						templateUrl: baseUrl + 'header.ng.html'
					},
					'left-sidebar': {
						templateUrl: baseUrl + 'left-sidebar.ng.html'
					},
					'main': {
						templateUrl: baseUrl + 'main.ng.html'
					},
					'footer': {
						templateUrl: baseUrl + 'footer.ng.html'
					}
				}
			});
	});
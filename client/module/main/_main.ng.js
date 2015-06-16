angular
	.module('app.main', [
		'app.parties',
		'app.message',
		'app.home'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		var baseUrl = 'client/module/main/view/';
		$stateProvider
			.state('main', {
				url: '',
				abstract: true,
				views: {
					'header': {
						templateUrl: baseUrl + 'header.ng.html'
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
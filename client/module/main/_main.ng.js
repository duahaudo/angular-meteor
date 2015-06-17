angular
	.module('app.main', [
		'app.parties',
		'app.message',
		'app.home'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		var baseUrl = 'client/module/main/view/';
		$stateProvider
			.state('wrapper', {
				url: '',
				abstract: true,
				templateUrl: baseUrl + 'wrapper.ng.html'
			})
			.state('wrapper.main', {
				url: '/main',
				abstract: true,
				resolve: {
					"currentUser": function($meteor) {
						//return $meteor.requireUser();
						return true;
					}
				},
				views: {
					'': {},
					'header@wrapper': {
						templateUrl: baseUrl + 'header.ng.html'
					},
					'left-sidebar@wrapper': {
						templateUrl: baseUrl + 'left-sidebar.ng.html'
					},
					'right-sidebar@wrapper': {
						templateUrl: baseUrl + 'right-sidebar.ng.html'
					},
					'breadcrumb@wrapper': {
						templateUrl: baseUrl + 'breadcrumb.ng.html'
					},
					'main@wrapper': {
						templateUrl: baseUrl + 'main.ng.html'
					},
					'footer@wrapper': {
						templateUrl: baseUrl + 'footer.ng.html'
					}
				}
			});
	})
	.run(function() {

	});
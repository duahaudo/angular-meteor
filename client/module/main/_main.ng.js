angular
	.module('app.main', [
		'app.parties',
		'app.message',
		'app.home',
		'app.news',
		'main.controller'
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
				url: '/app',
				abstract: true,
				views: {
					'': {},
					'header@wrapper': {
						templateUrl: baseUrl + 'header.ng.html',
						controller: 'main.headerController'
					},
					'left-sidebar@wrapper': {
						templateUrl: baseUrl + 'left-sidebar.ng.html',
						controller: 'main.leftSidebarController'
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
	.run(function($rootScope) {
		$rootScope.pageTitle = undefined;
		$rootScope.pageDescriptions = undefined;
	
		$rootScope.$on('update-page-title', function (ev, title, descriptions) {
			$rootScope.pageTitle = title;
			$rootScope.pageDescriptions = descriptions;
		});
	});
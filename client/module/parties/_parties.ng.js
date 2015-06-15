angular
	.module('app.parties', [
		'parties.controller'
	])
	.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
		function($urlRouterProvider, $stateProvider, $locationProvider) {
			$stateProvider
				.state('main.parties', {
					url: '/parties',
					templateUrl: 'client/module/parties/view/parties.ng.html',
					controller: 'partiesController'
				})
				.state('main.parties2', {
					url: '/parties2',
					templateUrl: 'client/module/parties/view/parties2.ng.html'
				});
		}
	]);
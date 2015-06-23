angular
	.module('app.message', [
		'message.directive',
		'message.controller'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider
			.state('wrapper.main.messages', {
				url: '/messages',
				templateUrl: 'client/module/message/view/message.ng.html',
				controller: 'messageController'
			});
	});
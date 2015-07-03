angular
	.module('app.account', [
		'account.service',
		'account.filter',
		'account.controller'
	]).config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider
			.state('wrapper.main.account', {
				url: '/account',
				template: '<div ui-view></div>',
				abstract: true
			}).state('wrapper.main.account.setting', {
				url: '/setting',
				template: 'setting'
			}).state('wrapper.main.account.profile', {
				url: '/profile',
				template: 'profile'
			});
	});
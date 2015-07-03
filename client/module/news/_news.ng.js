angular
	.module('app.news', [
		'news.controller'
	]).config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider
			.state('wrapper.main.news', {
				url: '/news',
				templateUrl: 'client/module/news/view/news.ng.html',
				controller: 'newsController'
			});
	});
angular
	.module('myApp', [
		"angular-meteor",
		'ui.router',
		'app.main'
	])
	.config(function($urlRouterProvider, $locationProvider) {});
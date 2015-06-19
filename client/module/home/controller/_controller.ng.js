angular
	.module('home.controller', [])
	.controller('homeController', function ($scope) {
		$scope.$emit('update-page-title', 'Home page', 'test details');
	});
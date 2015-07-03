angular
	.module('home.controller', [])
	.controller('homeController', function ($scope, $state, accountService) {
		$scope.$emit('update-page-title', 'Home page', 'My homes');
	
		if (!accountService.currentUser().username) {
			$state.go('login');
		}
	});
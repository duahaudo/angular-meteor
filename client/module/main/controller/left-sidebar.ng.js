angular
	.module('main.controller')
	.controller('main.leftSidebarController', function($scope, accountService) {
		$scope.currentUser = accountService.currentUser();

		$scope.signout = function() {
			accountService.signout();
		};
	});
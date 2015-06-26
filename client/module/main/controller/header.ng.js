angular
	.module('main.controller')
	.controller('main.headerController', function($scope, accountService) {
		$scope.username = function() {
			return accountService.currentUser() ? accountService.currentUser().username : '';
		};

		$scope.signout = function() {
			accountService.signout();
		};
	});
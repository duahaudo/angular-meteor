angular
	.module('login.controller')
	.controller('login.signupController', function($scope, $meteor, $state, accountService) {
		$scope.email = undefined;
		$scope.password = undefined;
		$scope.username = undefined;
		$scope.agree = false;

		$scope.signup = function() {
			if ( !! $scope.agree && !!$scope.email && !!$scope.password) {
				accountService.createUser($scope.email, $scope.password, $scope.username).then(function() {
					$state.go('wrapper.main.home');
				}).catch (function(error) {
					console.log(error);
				});
			}
		};
	});
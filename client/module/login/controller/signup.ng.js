angular
	.module('login.controller')
	.controller('signupController', function($scope, $meteor, $state, loginService) {
		$scope.email = undefined;
		$scope.password = undefined;
		$scope.username = undefined;
		$scope.agree = false;

		$scope.signup = function() {
			if ( !! $scope.agree && !!$scope.email && !!$scope.password) {
				loginService.createUser($scope.email, $scope.password, $scope.username).then(function() {
					$state.go('wrapper.main.home');
				}).catch (function(error) {
					console.log(error);
				});
			}
		};
	});
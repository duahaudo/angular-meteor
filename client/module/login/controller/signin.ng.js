angular
	.module('login.controller')
	.controller('login.signinController', function($scope, $meteor, $state, accountService) {
		$scope.email = undefined;
		$scope.password = undefined;
		$scope.error = undefined;
	
		$scope.signin = function () {
			accountService.signin($scope.email, $scope.password).then(function (){
				$state.go('wrapper.main.home');
			}).catch(function (error) {
				console.log(error);
			});
		};
	});
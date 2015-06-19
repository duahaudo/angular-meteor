angular
	.module('login.controller')
	.controller('signinController', function($scope, $meteor, $state, loginService) {
		$scope.email = undefined;
		$scope.password = undefined;
		$scope.error = undefined;
	
		$scope.signin = function () {
			loginService.signin($scope.email, $scope.password).then(function (){
				$state.go('wrapper.main.home');
			}).catch(function (error) {
				console.log(error);
			});
		};
	});
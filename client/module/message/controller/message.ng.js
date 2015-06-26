angular
	.module('message.controller')
	.controller('messageController', function($scope) {
		$scope.$emit('update-page-title', 'Messages', 'real time message');
	
		$scope.room = {};
	});
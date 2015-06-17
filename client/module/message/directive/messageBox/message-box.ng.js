angular
	.module('message.directive')
	.directive('messageBox', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope, $meteor) {
			$scope.messages = $meteor.collection(Messages);
			
			$scope.roomId = undefined;
			$scope.myname = undefined;
			$scope.message = undefined;
			$scope.addMessage = function() {
				$scope.messages.push({
					roomId: $scope.roomId,
					owner: $scope.myname,
					message: $scope.message,
					created: new Date()
				});
				$scope.message = undefined;
			};
		}

		return {
			restrict: 'E',
			templateUrl: 'client/module/message/directive/messageBox/message-box.ng.html',
			link: link,
			scope: {},
			controller: controller
		};
	});
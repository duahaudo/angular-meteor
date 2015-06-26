angular
	.module('message.directive')
	.directive('messageBox', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope, $meteor, accountService) {
			$scope.userId = accountService.currentUser()._id;
			//$scope.messages = $scope.$meteorCollection(Messages).subscribe('get-messages-by-room', $scope.roomId);
			
			//$meteor.autorun($scope, function() {
			//	$meteor.subscribe('get-chat-room-by-id', $scope.getReactively('roomId')).then(function () {
			//		$scope.room = $scope.$meteorCollection(ChatRooms));
			//		console.log($scope.room);
			//	});
			//});
			
			$meteor.autorun($scope, function () {
				$scope.messages = $scope.$meteorCollection(Messages, false).subscribe('get-messages-by-room', $scope.getReactively('room._id'));
				console.log('change room');
			});
			
			$scope.myname = undefined;
			$scope.message = undefined;
			$scope.addMessage = function() {
				$scope.messages.save({
					roomId: $scope.room._id,
					owner: $scope.userId,
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
			scope: {
				room: '='
			},
			controller: controller
		};
	});
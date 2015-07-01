angular
	.module('message.directive')
	.directive('messageBox', function() {
		function link(scope, element, attrs) {

		}
	
		function scrollToBottom() {
			$('.scrollable.wrapper').scrollTop($('.scrollable.wrapper').height());
		}

		function controller($scope, $meteor, $timeout, accountService) {
			$scope.currentUser = accountService.currentUser();
			
			$meteor.autorun($scope, function () {
				$scope.messages = $scope.$meteorCollection(Messages, false).subscribe('get-messages-by-room', $scope.getReactively('room._id'));
				$timeout(scrollToBottom, 1000);
			});
			
			$scope.myname = undefined;
			$scope.message = undefined;
			$scope.addMessage = function() {
				if (!$scope.message) {
					return;
				}
				// save new message
				$scope.messages.save({
					roomId: $scope.room._id,
					owner: {
						id: $scope.currentUser._id,
						name: $scope.currentUser.username
					},
					message: $scope.message,
					created: new Date()
				});
				// clear textbox
				$scope.message = undefined;
				// scroll to bottom
				$timeout(scrollToBottom, 500);
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
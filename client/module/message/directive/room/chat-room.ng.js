angular
	.module('message.directive')
	.directive('chatRoom', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope, $meteor, accountService) {
			//$meteor.subscribe('all-chat-rooms')
			//$scope.chatRooms = $meteor.collection(ChatRooms);
			$scope.chatRooms = $scope.$meteorCollection(ChatRooms, false).subscribe('all-chat-rooms');

			$scope.newRoom = {
				name: undefined,
				public: false
			};

			$scope.currenRoom = [];
			$scope.addRoom = function() {
				$scope.chatRooms.save({
					name: $scope.newRoom.name,
					public: $scope.newRoom.public,
					owner: accountService.currentUser()._id,
					created: new Date()
				});
				
				// reset add room dialog
				$scope.newRoom = {
					name: undefined,
					public: false
				};
			};

			$scope.selectRoom = function(selectRoom) {
				$scope.currenRoom = $meteor.collection(ChatRooms).subscribe('get-chat-room', selectRoom._id);
				console.log($scope.currenRoom);
			};

			$scope.deleteRoom = function(room) {
				$meteor.call('remove', accountService.currentUser()._id, room).then(
					function(data) {
						console.log('success delete', data);
					},
					function(err) {
						console.log('failed', err);
					}
				);
			};
		}

		return {
			restrict: 'E',
			templateUrl: 'client/module/message/directive/room/chat-room.ng.html',
			link: link,
			scope: {},
			controller: controller
		};
	});
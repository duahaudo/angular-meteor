angular
	.module('message.directive')
	.directive('chatRoom', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope, $meteor) {
			//$meteor.subscribe('all-chat-rooms')
			//$scope.chatRooms = $meteor.collection(ChatRooms);
			$scope.chatRooms = $meteor.collection(ChatRooms).subscribe('all-chat-rooms');
			
			$scope.name = undefined;

			$scope.currenRoom = [];
			$scope.addRoom = function() {
				$scope.chatRooms.push({
					name: $scope.name,
					created: new Date()
				});
			};

			$scope.selectRoom = function(selectRoom) {
				$scope.currenRoom = $meteor.collection(ChatRooms).subscribe('get-chat-room', selectRoom._id);
				console.log($scope.currenRoom);
			};
			
			$scope.deleteRoom = function (room) {
				$scope.chatRooms.remove(room);
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
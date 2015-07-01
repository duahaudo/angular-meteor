angular
	.module('message.directive')
	.directive('chatRoom', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope, $meteor, accountService) {
			$scope.userId = accountService.currentUser()._id;

			$scope.chatRooms = $scope.$meteorCollection(ChatRooms, false).subscribe('all-chat-rooms-by-user-id', $scope.userId);
			$scope.users = $scope.$meteorCollection(Meteor.users, false).subscribe('get-users');

			$scope.inviteUsers = [];
			$scope.settingRoom = function($event, room) {
				// Prevents the event from bubbling up the DOM tree
				$event.stopPropagation();
				// set seleted room
				$scope.selectRoom(room);
				// user inside that room
				var users = $scope.room.users;

				if (!$scope.room.users) {
					return;
				}
				// update check flag
				$scope.inviteUsers = _($scope.users).map(function(user) {
					user.checked = _($scope.room.users).indexOf(user._id) > -1;
					return user;
				});
				// show modal
				$('#manage-room-users').modal('show');
			};

			$scope.inviteUser = function() {
				var addUserIds = _($scope.inviteUsers).chain().filter(function(user) {
					return !!user.checked;
				}).map(function(user) {
					return user._id;
				}).value(),
					removeUserIds = _($scope.inviteUsers).chain().filter(function(user) {
						return !user.checked;
					}).map(function(user) {
						return user._id;
					}).value();

				if (addUserIds.length > 0) {
					$meteor.call('chatroom.addNewUser', $scope.room._id, addUserIds);
				}

				if (removeUserIds.length > 0) {
					$meteor.call('chatroom.removeUser', $scope.room._id, removeUserIds);
				}
			};

			$scope.newRoom = {
				name: undefined,
				public: false
			};
			$scope.currenRoom = [];
			$scope.addRoom = function() {
				$scope.chatRooms.save({
					name: $scope.newRoom.name,
					public: $scope.newRoom.public,
					owner: $scope.userId,
					users: [$scope.userId],
					created: new Date()
				});

				// reset add room dialog
				$scope.newRoom = {
					name: undefined,
					public: false
				};
			};
			$scope.isSelectedRoom = function(room) {
				return room._id === $scope.room._id;
			};

			$scope.selectRoom = function(selectRoom) {
				$scope.room = selectRoom;
			};

			$scope.deleteRoom = function(room) {
				$meteor.call('chatroom.removeRoom', room).then(
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
			scope: {
				room: '='
			},
			controller: controller
		};
	});
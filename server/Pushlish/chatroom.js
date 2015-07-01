// server: publish the current size of a collection
Meteor.publish("all-chat-rooms-by-user-id", function(userId) {
	var result = ChatRooms.find({
		$or: [{
			$and: [{
				"public": true
			}, {
				"public": {
					$exists: true
				}
			}]
		}, {
			$and: [{
				users: {
					$in: [userId]
				}
			}, {
				users: {
					$exists: true
				}
			}]
		}]
	});
	return result;
});

Meteor.publish("get-chat-room-by-id", function(roomId) {
	var result = ChatRooms.find({
			_id: roomId
		}, {
			fields: {
				_id: 1,
				name: 1
			}
		});
	return result;
});

Meteor.publish("get-chat-room", function(id) {
	return ChatRooms.find({
		_id: id
	});
});
// server: publish the current size of a collection
Meteor.publish("all-chat-rooms", function(userId) {
	console.log(this.userId);
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
				owner: this.userId
			}, {
				owner: {
					$exists: true
				}
			}]
		}]
	});
	return result;
});

Meteor.publish("get-chat-room-by-id", function(id) {
	console.log("get-chat-room: " + new Date());
	return ChatRooms.find({
		_id: id
	});
});

Meteor.publish("get-chat-room", function(id) {
	return ChatRooms.find({
		_id: id
	});
});
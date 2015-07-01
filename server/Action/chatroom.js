// At the bottom of simple-todos.js, outside of the client-only block
Meteor.methods({
	'chatroom.addNewUser': function(roomId, userIds) {
		var room = ChatRooms.findOne({
			_id: roomId
		});
		_(userIds).each(function(id) {
			if (_(room.users).indexOf(id) === -1) {
				room.users.push(id);
			}
		});

		ChatRooms.update({
			_id: roomId
		}, room);
	},
	'chatroom.removeUser': function(roomId, userIds) {
		var room = ChatRooms.findOne({
			_id: roomId
		});
		
		_(userIds).each(function(userId) {
			room.users = _(room.users).reject(function(id) {
				return userId === id;
			});
		});

		ChatRooms.update({
			_id: roomId
		},room);
	},
	'chatroom.removeRoom': function(room) {
		if (Meteor.userId() === room.owner) {
			ChatRooms.remove(room);
			return true;
		}
		return false;
	}
});
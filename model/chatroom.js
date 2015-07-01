ChatRooms = new Mongo.Collection('chatRoom');
ChatRooms.allow({
	insert: function(userId, room) {
		return true;
	},
	remove: function(userId, room) {
		return false; // does not allow delete from client
	}
});
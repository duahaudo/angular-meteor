ChatRooms = new Mongo.Collection('chatRoom');
ChatRooms.allow({
	insert: function(userId, room) {
		console.log(userId);
		console.log(room);
		return true;
	},
	remove: function(userId, room) {
		console.log(userId);
		console.log(room);
		return true;
	}
});
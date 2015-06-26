ChatRooms = new Mongo.Collection('chatRoom');
ChatRooms.allow({
	insert: function(userId, room) {
		return true;
	},
	remove: function(userId, room) {
		console.log('Allow');
		return false; // does not allow delete from client
	}
});
Meteor.methods({
	remove: function (room) {
		if (Meteor.userId() === room.owner) {
			ChatRooms.remove(room);
			return true;
		}
		return false;
	}
});
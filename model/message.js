Messages = new Mongo.Collection("message");
Messages.allow({
	insert: function(userId, message) {
		return true;
	},
	remove: function(userId, message) {
		return false;
	}
});
Messages = new Mongo.Collection("message");
Messages.allow({
	insert: function(userId, message) {
		console.log('inser new message');
		console.log(message);
		return true;
	},
	remove: function(userId, message) {
		return false;
	}
});
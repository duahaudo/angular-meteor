// server: publish the current size of a collection
Meteor.publish("all-chat-rooms", function() {
	console.log("all-chat-rooms: " + new Date());
	var result = ChatRooms.find({});
	return result;
});

Meteor.publish("get-chat-room", function(id) {
	console.log("get-chat-room: " + new Date());
	return ChatRooms.find({_id: id});
});
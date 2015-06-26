// server: publish the current size of a collection
Meteor.publish("message", function (roomId) {
	
});

Meteor.publish('get-messages-by-room', function (roomId) {
	var result = Messages.find({
		$or: [{
			$and: [{
				roomId: roomId
			}, {
				roomId: {
					$exists: true
				}
			}]
		}]
	});
	console.log('get message by room id');
	console.log(result.fetch());
	return result;
});
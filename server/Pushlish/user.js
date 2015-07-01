Meteor.publish('get-users', function (userId) {
	var result = Meteor
					.users
					.find({}, {fields: {'_id': 1, 'username': 1}});
	return result;
});
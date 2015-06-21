angular
	.module('account.service', [])
	.service('accountService', function($meteor, $q, $state) {
		return {
			signin: function(email, password) {
				var def = $q.defer();

				$.blockUI();
				Meteor.loginWithPassword(email, password, function(error) {
					def[!!error ? 'reject' : 'resolve'](error);
					$.unblockUI();
				});

				return def.promise;
			},
			createUser: function(email, password, username) {
				var def = $q.defer(),
					user = {
						email: email,
						username: username,
						password: password
					};

				$.blockUI();
				Accounts.createUser(user, function (error) {
					def[!!error ? 'reject' : 'resolve'](error);
					$.unblockUI();
				});
				
				return def.promise;
			},
			signout: function() {
				Meteor.logout();
				$state.go('signin');
			},
			currentUser: function() {
				return Meteor.user();
			}
		};
	});
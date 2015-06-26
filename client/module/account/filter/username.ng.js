angular
	.module('account.filter')
	.filter('username', function(accountService) {
		return function(userId) {
			if (!userId) {
				return '';
			}
			
			var user = accountService.getUser(userId),
				username = user.username || user.emails[0];
			
			return username;
		};
	});
angular
	.module('login.service', [])
	.service('loginService', function($meteor, $q) {
		return {
			signin: function(email, password) {
				var def = $q.defer();

				$.blockUI();
				$meteor.loginWithPassword(email, password)
					.then(def.resolve)
					.catch (def.reject)
					.finally($.unblockUI);

				return def.promise;
			},
			createUser: function(email, password, username) {
				var def = $q.defer();

				$.blockUI();
				$meteor.createUser({
					email: email,
					username: username,
					password: password
				}).then(def.resolve)
				.catch (def.reject)
				.finally($.unblockUI);

				return def.promise;
			}
		};
	});
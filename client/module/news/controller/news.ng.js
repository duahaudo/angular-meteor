angular
	.module('news.controller')
	.controller('newsController', function($scope, $meteor) {
		$scope.click = function() {
			$meteor.call('news.crawler', 'https://github.com/meteor/meteor', function(result) {
				console.log(result);
			});
		};
	});
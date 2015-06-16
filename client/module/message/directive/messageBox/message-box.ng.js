angular
	.module('message.directive')
	.directive('messageBox', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope) {

		}

		return {
			restrict: 'E',
			templateUrl: 'client/module/message/directive/messageBox/message-box.ng.html',
			link: link,
			scope: {},
			controller: controller
		};
	});
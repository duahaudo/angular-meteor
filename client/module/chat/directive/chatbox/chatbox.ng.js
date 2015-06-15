angular
	.module('chat.directive')
	.directive('chatbox', function() {
		function link(scope, element, attrs) {

		}

		function controller($scope) {

		}

		return {
			restrict: 'E',
			templateUrl: 'client/module/chat/directive/chatbox/chatbox.html'
			//link: link,
			//scope: {},
			//controller: controller
		};
	});
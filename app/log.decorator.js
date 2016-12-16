
(function () {
	'use strict';
	angular.module('app')
		.decorator('$log', logDecorator);

	logDecorator.$inject = ['$delegate', '$filter', 'APP_NAME'];

	function logDecorator($delegate, $filter, APP_NAME) {
		$delegate.log = function(message) {
			console.log(convertMessage(message));
		};
		$delegate.info = function (message) {
			console.info(convertMessage(message));
		};
		$delegate.warn = function (message) {
			console.warn(convertMessage(message));
		};
		$delegate.error = function (message) {
			console.error(convertMessage(message));
		};
		$delegate.debug = function (message) {
			console.debug(convertMessage(message));
		};
	
		$delegate.myLog = function(message) {
			console.log(convertMessage(message, APP_NAME));
		};

		function convertMessage(message, appName) {
			return `${$filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss')}: ${appName || ''} ${message}`;
		}

		return $delegate;
	}
	
})();




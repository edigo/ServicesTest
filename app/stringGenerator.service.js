(function () {
	'use strict';
	angular.module('app')
		.factory('stringGeneratorService', stringGeneratorService);
	
	function stringGeneratorService() {
		let defaultLen = 10;
		let availableChars =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		return {
			get
		};

		function get(len) {
			let rndStr = Array.apply(null, new Array(len || defaultLen)).map(function () {
				return availableChars[Math.floor(Math.random() * availableChars.length)];
			}).join('');
			return rndStr;
		}
	}
})();
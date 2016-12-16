(function () {
	"use strict";
	angular.module("app")
		.factory("localStorageService", localStorageService);

	localStorageService.$inject = ["$window"];

	function localStorageService($window) {
		return {
			get,
			set,
			getObject,
			setObject
		};

		function get(key) {
			return $window.localStorage[key];
		}

		function set(key, value) {
			$window.localStorage[key] = value;
		}

		function getObject(key) {
			return JSON.parse($window.localStorage[key] || "null");
		}

		function setObject(key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		}
	}
})();
(function () {
	'use strict';
	angular.module('app')
		.factory('rank1Service', rank1Service);

	rank1Service.$inject = ['RANK_CONFYG'];

	function rank1Service(RANK_CONFYG) {
		let arr = [0, 100, 200, 500, 1000];
		return {
			getRank
		};

		function getRank(count) {
			let str = '';
			for (let i = 0; i < arr.length; i++) {
				if (count < arr[i]) {
					break;
				}
				str += RANK_CONFYG.DEFAULT_RANK_CHAR;
			}
			return str;
		}
	}
})();
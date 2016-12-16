(function () {
	'use strict';
	angular.module('app')
		.provider('rank2Service', rank2Service);

	rank2Service.$inject = ['RANK_CONFYG'];

	function rank2Service(RANK_CONFYG) {
		let rankChar = RANK_CONFYG.DEFAULT_RANK_CHAR;
		let arr = [0, 100, 200, 500, 1000];

		return {  //provider object
			$get,
			configRankChar
		};

		function $get() {
			return {
				getRank

			};

			function getRank(count) {
				let str = '';
				for (let i = 0; i < arr.length; i++) {
					if (count < arr[i]) {
						break;
					}
					str += rankChar;
				}
				return str;
			}
		}

		function configRankChar(char) {
			if (char) {
				rankChar = char;
				return this;
			}
			else {
				return rankChar;
			}
		}
	}
})();
(function() {
	'use strict';

	angular.module('app', [])
		.constant('RANK_CONFYG', {
			'DEFAULT_RANK_CHAR': '*',
			'RANK_CHAR': '+'
		})
		.constant('APP_NAME', 'Test App')
		.config(configApp);

	function configApp(rank2ServiceProvider, RANK_CONFYG) {
		rank2ServiceProvider.configRankChar(RANK_CONFYG.RANK_CHAR);
	}

	angular.element(document).ready(() => {
		angular.bootstrap(document, ['app']);
	});

})();
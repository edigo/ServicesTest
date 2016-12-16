(function() {
	'use strict';

	angular.module('app')
		.controller('SimpleCtrl', SimpleCtrl);

	SimpleCtrl.$inject = ['localStorageService', 'rank1Service', 'rank2Service', '$log', 'stringGeneratorService', 'drawService'];

	function SimpleCtrl(localStorageService, rank1Service, rank2Service, $log, stringGeneratorService, drawService) {
		//test log decorator
		$log.log('test');
		$log.info('test');
		$log.warn('test');
		$log.error('test');
		$log.debug('test');
		$log.myLog('test');
		
		//test localStorageService
		$log.log(localStorageService);
		localStorageService.set('name', 'TestName');
		$log.log(localStorageService.get('name'));
		localStorageService.setObject('test', {
			id: 1,
			name: 'TestName'
		});

		let test = localStorageService.getObject('test');
		$log.log(test);

		//test rank factory
		$log.log('-1' + rank1Service.getRank(-1));
		$log.log('0' + rank1Service.getRank(0));
		$log.log('15' + rank1Service.getRank(15));
		$log.log('100' + rank1Service.getRank(100));
		$log.log('150' + rank1Service.getRank(150));
		$log.log('200' + rank1Service.getRank(200));
		$log.log('350' + rank1Service.getRank(350));
		$log.log('500' + rank1Service.getRank(500));
		$log.log('750' + rank1Service.getRank(750));
		$log.log('1000' + rank1Service.getRank(1000));
		$log.log('1500' + rank1Service.getRank(1500));

		//test rank provider
		$log.log('-1' + rank2Service.getRank(-1));
		$log.log('0' + rank2Service.getRank(0));
		$log.log('15' + rank2Service.getRank(15));
		$log.log('100' + rank2Service.getRank(100));
		$log.log('150' + rank2Service.getRank(150));
		$log.log('200' + rank2Service.getRank(200));
		$log.log('350' + rank2Service.getRank(350));
		$log.log('500' + rank2Service.getRank(500));
		$log.log('750' + rank2Service.getRank(750));
		$log.log('1000' + rank2Service.getRank(1000));
		$log.log('1500' + rank2Service.getRank(1500));

		//test string generator
		$log.log(stringGeneratorService.get());
		$log.log(stringGeneratorService.get(5));
		$log.log(stringGeneratorService.get(25));
		$log.log(stringGeneratorService.get(100));

		//test draw service
		drawService.drawCircle('#container', 25, 'red');
		drawService.drawRectangle('#container', 50, 150, 'green');
		drawService.drawEllipse('#container', 50, 25, 'blue');
	}

})();
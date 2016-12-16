(function () {
	'use strict';
	angular.module('app')
		.factory('drawService', drawService);
	
	function drawService() {
		let namespace = 'http://www.w3.org/2000/svg';

		return {
			drawCircle,
			drawRectangle,
			drawEllipse
		};

		function drawCircle(selector, r, fill) {
			let attributes = { cx: r, cy: r, r: r, fill: fill };
			draw(selector, r * 2, r * 2, 'circle', attributes);
		}

		function drawRectangle (selector, height, width, fill) {
			let attributes = { height: height, width: width,fill: fill };
			draw(selector, height, width, 'rect', attributes);
		}

		function drawEllipse(selector, rx, ry, fill) {
			let attributes = { cx: rx, cy: ry, rx: rx, ry: ry, fill: fill };
			draw(selector, ry * 2, rx * 2, 'ellipse', attributes);
		}

		function draw(selector, height, width, name, attributes) {
			let container = angular.element(document.querySelector(selector));
			let svgContainer = document.createElementNS(namespace, 'svg');
			svgContainer.setAttribute('height', height);
			svgContainer.setAttribute('width', width);

			var svgElement = document.createElementNS(namespace, name);
			for (let attr in attributes) {
				svgElement.setAttribute(attr, attributes[attr]);
			}

			svgContainer.append(svgElement);
			container.append(svgContainer);
		}
	}
})();
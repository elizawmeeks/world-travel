"use strict";

var app = angular.module("WorldTravelApp", ["ngRoute"]);

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/guide-list.html'
		// controller: 'BookCtrl'
	});
});
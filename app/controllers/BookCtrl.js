"use strict"; 
console.log("hi BookCtrl");
app.controller("BookCtrl", ($scope, BookFactory) => {

	BookFactory.getGuides()
	.then( (guideCollection) => {
		$scope.books = guideCollection;
		console.log("$scope.books", $scope.books);
	});

});
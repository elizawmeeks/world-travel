"use strict";

app.factory("BookFactory", ($q, $http) => {
	
	let getGuides = () => {
		return $q((resolve, reject) => {
			console.log("hey bob");
			$http.get('./data/guides.json')
			.then( (guidesObj) => {
				console.log("guidesObj.data.guides", guidesObj.data.guides);
				resolve(guidesObj.data.guides);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};
	return {getGuides};
});
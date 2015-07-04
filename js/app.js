(function(){
	var app = angular.module('dataStore', []);

	var currentTime = Date.now();

	app.controller('StoreController',[ '$http', function($http){
		var resources = this;
		resources.materials = [];
	    $http.get('res/data1.json').success(function(data){
	      resources.materials = data;
	    });

	}]);

		app.controller('ReviewController', function(){
		this.review= {};
		this.addReview = function(product){
			//this.review.createdOn = Date.now();
			this.review.createdOn = currentTime
			product.reviews.push(this.review);
			this.review = {};
		};
	});


	// app.controller('ReviewController', function(){
	// 	this.review= {};
	// 	this.addReview = function(product){
	// 		//this.review.createdOn = Date.now();
	// 		this.review.createdOn = currentTime
	// 		product.reviews.push(this.review);
	// 		this.review = {};
	// 	};
	// });

	

})();



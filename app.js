var myApp=angular.module("myApp",[]); 

myApp.controller('myCtrl', function($scope, $http) {

	$scope.address = 'ucla';
	console.log('main controller called');

	$scope.location={lat:13.0827,lng:80.2707};
	var address = $scope.address;

	$scope.go=function(){
		console.log('go method called');
 
		console.log($scope.address);

		$http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.address + "&key=AIzaSyCnI89R9_5DcPldlSNI8gI5h0JjVoAQfKQ")
		.then(function(response) {
		$scope.location = response.data.results[1].geometry.location;
			console.log('latitude:'+$scope.location.lat);
			console.log('logitude:'+$scope.location.lng);
		});
	};

	$scope.put = function(address){
		$scope.address =address;
		console.log('address ' + address);
		$scope.go();
	};

});

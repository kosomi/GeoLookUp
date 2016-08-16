var myApp=angular.module("myApp",[]);
	myApp.directive("myMaps",function(){
		function Controller( $scope ) {
          console.log( "mid - controller" );
         }
		return{
			restrict:'E',
			template:'<div></div>',
			replace:true,
			link:function(scope,element,attrs){
				console.log('link code executed');
				var myLatLng=new google.maps.LatLng(scope.location.lat,scope.location.lng);
				var mapOptions={
					center:myLatLng,
					zoom:4,
					mapTypeId:google.maps.MapTypeId.SATELLITE
				};
				var map= new google.maps.Map(document.getElementById(attrs.id)
					,mapOptions);
				// var marker=new google.maps.Marker({
					// position:myLatLng,
					// map:map,
					// title:"My town"
				// });@@
				// marker.setMap(map);
			},
			controller:Controller
		};
	});

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
});

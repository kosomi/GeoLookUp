angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {




$scope.test = 222;
 
var posOptions = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
};

$cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
    var lat  = position.coords.latitude;
    var long = position.coords.longitude; 
    console.log(lat);
    console.log(long); 

    localStorage.setItem('lat', lat);
    localStorage.setItem('long', long);

    $scope.lat = localStorage.getItem('lat');
    $scope.long = localStorage.getItem('long');

    $ionicLoading.hide();           
     
}, function(err) {
    $ionicLoading.hide();
    console.log(err);
});



})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

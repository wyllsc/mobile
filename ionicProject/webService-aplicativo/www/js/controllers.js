angular.module('starter.controllers', [])

.controller('NoticiasCtrl', function($scope, $http) {
    $http.get("http://innovar.besaba.com/ws/gjcc/buscaNoticias.php5").success(function(data, status, headers, config){
        console.log(" **** Retornando Noticias **** ");
        $scope.valores = data;
    }).error(function(data, status, headers, config){
    	alert("Servidor Fora do Ar");
    	console.log(" **** Erro: Retornando Noticias "+status+" **** ");
    })
})

.controller('WebServiceCtrl', function($scope, $http) {
	$http.get('http://innovar.besaba.com/ws/gjcc/buscaVideos.php5').success(function(data, status, headers, config){
        console.log(" **** Retornando Videos **** ");
        $scope.videos = data;
    }).error(function(data, status, headers, config){
    	alert("Servidor Fora do Ar");
    	console.log(" **** Erro: Retornando Videos "+status+" **** ");
    })
})


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
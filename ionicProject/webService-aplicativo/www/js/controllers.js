angular.module('starter.controllers', [])

.controller('NoticiasCtrl', function($scope, $http) {
    $http.get("http://innovar.besaba.com/ws/gjcc/buscaNoticias.php5").success(function(data, status, headers, config){
        console.log(" **** Retornando Noticias **** ");
        $scope.valores = data;
    }).error(function(data, status, headers, config){
    	console.log(" **** Erro: Retornando Noticias"+status+" **** ");
        alert("Servidor Fora do Ar");
    })
})

.controller('WebServiceCtrl', function($scope, $http) {
	$http.get('http://innovar.besaba.com/ws/cliente2.php5').success(function (data) {
		$scope.itens = data;
	});
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
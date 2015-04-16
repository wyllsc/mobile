angular.module('starter.controllers', [])


.controller('WebServiceCtrl', function($scope, $http) {
    //$http.get("http://127.0.0.1/projects/webservice-php/webservice/cliente.php5").success(function(data, status, headers, config){
    $http.get("http://innovar.besaba.com/ws/cliente2.php5").success(function(data, status, headers, config){
        console.log('Data Sucesso');
        console.log(data);
        $scope.itens = data;
    }).error(function(data, status, headers, config){
        console.log("**** ERROR ****");
        console.log(status);
        alert(status);
    })
})

.controller('WordpressCtrl', function($scope, $http) {
    $http.get("http://innovar.besaba.com/ws/cliente_wordpress.php5").success(function(data, status, headers, config){
        console.log('Data Sucesso');
        console.log(data);
        $scope.valores = data;
    }).error(function(data, status, headers, config){
        console.log("**** ERROR ****");
        console.log(status);
        alert(status);
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
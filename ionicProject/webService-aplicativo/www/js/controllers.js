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

.controller('VideoCtrl', function($scope, $http, $sce) {
	$http.get('http://innovar.besaba.com/ws/gjcc/buscaVideos.php5').success(function(data, status, headers, config){
        console.log(" **** Retornando Videos **** ");
        for (var item in data) {
		  var it = (data[item].url);
		  var id = it.split("watch?v=").pop();
		  var con = "https://www.youtube-nocookie.com/embed/";
		  data[item].url = $sce.trustAsResourceUrl(con.concat(id));
		  console.log(con.concat(id))
		}
        $scope.videos = data;
        
    }).error(function(data, status, headers, config){
    	alert("Servidor Fora do Ar");
    	console.log(" **** Erro: Retornando Videos "+status+" **** ");
    })
})

// https://blog.nraboy.com/2015/01/making-tinder-style-swipe-cards-ionic-framework/
.controller('FotosCtrl', function($scope, TDCardDelegate) {
	
	var cardTypes = 
		[{image: 'img/pic1.jpg', title: 'So much grass #hippster'},
		{ image: 'img/pic2.jpg', title: 'Way too much Sand, right?'},
		{ image: 'img/pic3.jpg', title: 'Beautiful sky from wherever'}];
           
	$scope.cardDestroyed = function(index) {
		$scope.cards.splice(index, 1);
		console.log('Cartão Removido');
	};
	
	$scope.addCard = function(i) {
		var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
		newCard.id = Math.random();
		$scope.cards.push(angular.extend({}, newCard));
	};
	
	$scope.cards = [];

	for(var i = 0; i < 3; i++)	$scope.addCard();
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  
  $scope.cardSwipedLeft = function(index) {
      console.log('<-- Swipe');
  };

  $scope.cardSwipedRight = function(index) {
      console.log('--> Swipe');
  };
 
})


.controller('DashCtrl', function($scope) {
	
	
//	$ionicModal.fromTemplateUrl('modal.html', {
//	  scope: $scope,
//	  animation: 'slide-in-up'
//	}).then(function(modal) {
//	  $scope.modal = modal;
//	});
//	
//	$scope.openModal = function() {
//	  $scope.modal.show();
//	};
//
//	$scope.closeModal = function() {
//	  $scope.modal.hide();
//	};
	
	
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
angular.module('starter.controllers', [])

.controller('NoticiasCtrl', function($scope, $http, $ionicLoading, Webservice) {
    $ionicLoading.show();

    noticias = Webservice.noticias(function() {
        $ionicLoading.hide();
        console.log("### Retorna Noticias ###");
    });
    
    
    $scope.ultimasNoticias = noticias;
})

.controller('VideoCtrl', function($scope, $http, $sce, $ionicLoading, Webservice) {
    $ionicLoading.show();

    var lista = Webservice.videos();

    lista.$promise.then(function(data) {
        angular.forEach(lista, function(item) {
            var it = (item.url);
            var id = it.split("watch?v=").pop();
            var con = "https://www.youtube-nocookie.com/embed/";
            item.url = $sce.trustAsResourceUrl(con.concat(id));
            console.log(con.concat(id))
        })
    })

    $scope.videos = lista;

    $ionicLoading.hide();
    console.log("### Retorna Vídeos ###");
})

// https://blog.nraboy.coxm/2015/01/making-tinder-style-swipe-cards-ionic-framework/
.controller('FotosCtrl', function($scope, $http, TDCardDelegate, Webservice, $ionicLoading) {

    $ionicLoading.show();

    var listaFotos = Webservice.fotos();
    
    listaFotos.$promise.then(function(data) {
        angular.forEach(listaFotos, function(item) {
            var id = (item.image);
            var caminho = "http://innovar.besaba.com/ws/gjcc/img/";
            item.image = caminho.concat(id);
            console.log(item.image);
        });
        
        var cardTypes = listaFotos;

        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
            console.log('Cartão Removido');
        };

        $scope.addCard = function() {
            angular.forEach(cardTypes, function(item) {
                $scope.cards.push(angular.extend({}, item));
            })
        };

        $scope.cards = [];
        $scope.addCard();
        
        $ionicLoading.hide();       
    });


    

    // var retorno = [];

    // $http.get('http://innovar.besaba.com/ws/gjcc/buscaFotos.php5').success(function(data,
    // status, headers, config){
    // console.log(" **** Retornando Fotos **** ");
    //        
    // for (var item in data) {
    // var id = (data[item].url);
    // var caminho = "http://innovar.besaba.com/ws/gjcc/img/";
    // data[item].url = caminho.concat(id);
    // console.log(caminho.concat(id))
    // }
    //        
    // // $scope.fotos = data;
    // retorno = data;
    //        
    // }).error(function(data, status, headers, config){
    // alert("Servidor Fora do Ar");
    // console.log(" **** Erro: Retornando Fotos "+status+" ****
    // ");
    // })

    // for (var item in retorno) {
    // var id = (data[item].url);
    // var caminho = "http://innovar.besaba.com/ws/gjcc/img/";
    // data[item].url =
    // $sce.trustAsResourceUrl(caminho.concat(id));
    //		  console.log(con.concat(id))
    //		}
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
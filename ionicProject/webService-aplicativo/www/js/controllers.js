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

.controller('FotosCtrl', function($scope, $http, TDCardDelegate, Webservice, $ionicLoading, $ionicModal) {
  
    //
    // $ionicModal.fromTemplateUrl('modal.html', {
    //    scope: $scope,
    //    animation: 'mh-slide'
    //  }).then(function(modal) {
    //    $scope.modal = modal;
    //  });
    //
    //  $scope.openModal = function() {
    //    buscaFotos();
    //    $scope.modal.show();
    //  };
    //
    //  $scope.closeModal = function() {
    //    $scope.modal.hide();
    //  };
    //
    //  var buscaFotos = function(){
    //     $ionicLoading.show();
    //     var listaFotos = Webservice.fotos();
    //
    //     listaFotos.$promise.then(function(data) {
    //
    //         angular.forEach(listaFotos, function(item) {
    //             var id = (item.image);
    //             var caminho = "http://innovar.besaba.com/ws/gjcc/img/";
    //             item.image = caminho.concat(id);
    //         });
    //
    //         var cardTypes = listaFotos;
    //
    //         $scope.cardDestroyed = function(index) {
    //             $scope.cards.splice(index, 1);
    //             console.log('Cartão Removido');
    //         };
    //
    //         $scope.addCard = function() {
    //             angular.forEach(cardTypes, function(item) {
    //                 $scope.cards.push(angular.extend({}, item));
    //             })
    //         };
    //
    //         $scope.cards = [];
    //         $scope.addCard();
    //
    //         $ionicLoading.hide();
    //         console.log("### Retorna Fotos ###");
    //     })
    //  };
})

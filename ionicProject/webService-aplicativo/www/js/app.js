angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.contrib.ui.tinderCards', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.constant('$ionicLoadingConfig', {
	noBackdrop: true,
	template: '<p> <ion-spinner icon="ripple"/></p> Carregando'
})

.directive('noScroll', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            $element.on('touchmove', function(e) {
            	e.preventDefault();
        	});
        }
    }
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.noticias', {
    url: '/noticias',
    views: {
      'tab-noticias': {
        templateUrl: 'templates/tab-noticias.html',
        controller: 'NoticiasCtrl'
      }
    }
  })

  .state('tab.video', {
    url: '/video',
    views: {
      'tab-video': {
        templateUrl: 'templates/tab-video.html',
        controller: 'VideoCtrl'
      }
    }
  })

  .state('tab.fotos', {
    url: '/fotos',
    views: {
      'tab-fotos': {
        templateUrl: 'templates/tab-fotos.html',
        controller: 'FotosCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/noticias');
});

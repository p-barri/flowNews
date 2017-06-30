// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.init', {
    url: '/init',
    views: {
        'menuContent': {
            templateUrl: 'templates/init.html'
        }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })
    .state('app.amulen', {
      url: '/amulen',
      views: {
        'menuContent': {
            templateUrl: 'templates/amulen.html',
            controller: 'AmulenCtrl'
        }
      },
      resolve: {
        getAmulen:  function($http){
          return $http({
              method: 'GET',
              url: 'http://74.207.253.57/hanga_test/api/public'})
              .then (function (data) {
                  return data.data;
              });
        }
      }
    })
    .state('app.sources', {
      url: '/sources/:categoryId',
      views: {
        'menuContent': {
            templateUrl: 'templates/sources.html',
            controller: 'SourcesCtrl'
        }
      },
      resolve: {
        getSources:  function($http, $stateParams){
          return $http({
              method: 'GET',
              url: 'https://newsapi.org/v1/sources?language=en&country=us&category='+$stateParams.categoryId})
              .then (function (data) {
                  return data.data.sources;
              });
        }
      }
    })

  .state('app.articles', {
    url: '/articles/:sourceId',
    views: {
      'menuContent': {
        templateUrl: 'templates/articles.html',
        controller: 'ArticlesCtrl'
      }
    },
    resolve: {
      getArticles:  function($http, $stateParams){
        return $http({
          method: 'GET',
          url: 'https://newsapi.org/v1/articles?apiKey=5aeff1dfaee8482ca33d63caeb22bfae&source='+$stateParams.sourceId})
          .then (function (data) {
            return data.data;
          });
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/init');
});

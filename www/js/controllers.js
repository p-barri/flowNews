angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

    $scope.categories = [
        { title: 'Negocios', id: 'business', icon: 'icon ion-ios-briefcase', color: 'red' },
        { title: 'Entretenimiento', id: 'entertainment', icon: 'icon ion-social-freebsd-devil', color: 'blue' },
        { title: 'Gaming', id: 'gaming', icon: 'icon ion-ios-game-controller-b', color: 'green' },
        { title: 'General', id: 'general', icon: 'icon ion-flag', color: 'orange' },
        { title: 'Musica', id: 'music', icon: 'icon ion-headphone', color: 'red' },
        { title: 'Politica', id: 'politics', icon: 'icon ion-code-working', color: 'blue' },
        { title: 'Deportes', id: 'sport', icon: 'icon ion-ios-football', color: 'green' },
        { title: 'Tecno', id: 'technology', icon: 'icon ion-paper-airplane', color: 'orange' }
    ];
})

.controller('CategoriesCtrl', function($scope) {
})

.controller('SourcesCtrl', function($scope, $stateParams, getSources) {
  if(getSources[0]){
    $scope.category = getSources[0].category;
  }
  $scope.sources = getSources;
})


.controller('ArticlesCtrl', function($scope, $stateParams, getArticles) {
    $scope.articles = getArticles.articles;
})

.controller('loginCtrl', function($scope, $stateParams, getSources) {
    $scope.sources = getSources;
})

.controller('AmulenCtrl', function($scope, $stateParams, getAmulen) {
    console.log(getAmulen);
    $scope.posts = getAmulen;
});
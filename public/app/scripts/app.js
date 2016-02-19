'use strict;'

angular.module('twitterFeedsApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngActivityIndicator',
    'gridshore.c3js.chart'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/filtered', {
        templateUrl: 'app/views/filtered.html',
        controller: 'FilteredCtrl'
      })
      .when('/mentions', {
        templateUrl: 'app/views/mentions.html',
        controller: 'MentionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }]);

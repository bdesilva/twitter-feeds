'use strict;'

angular.module('twitterFeedsApp')
  .controller('MainCtrl', ['$scope', '$http', '$activityIndicator',
      function($scope, $http, $activityIndicator) {
        //Variables and Initialization
        $http.get('/api/feeds')
        .success(function(data) {
            $scope.tweets = data.feeds;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
      }]);

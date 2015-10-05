'use strict;'

angular.module('twitterFeedsApp')
  .controller('FilteredCtrl', ['$scope', '$http', '$activityIndicator',
    function($scope, $http, $activityIndicator) {
      //Variables and Initialization
      $http.get('/api/feeds')
        .success(function(data) {
          $scope.filteredTweets = data.tweets_by_account;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    }
  ]);

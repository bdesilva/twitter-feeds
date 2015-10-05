'use strict;'

angular.module('twitterFeedsApp')
  .controller('MentionsCtrl', ['$scope', '$http', '$activityIndicator',
    function($scope, $http, $activityIndicator) {
      //Variables and Initialization
      $scope.datapoints = [];
      $scope.datacolumns = [];

      $http.get('/api/feeds')
        .success(function(data) {
          $scope.mentionTweets = data.mentions_by_account;
          angular.forEach(data.mentions_by_account, function(value, key) {
            var dataObj = {};
            dataObj.x = value.mentions;
            dataObj[value.twitter_account] = value.mentions;
            $scope.datapoints.push(dataObj);

            $scope.datacolumns.push({
              "id": value.twitter_account,
              "type": "spline"
            });
          });

          $scope.datax = {
            "id": "x"
          };
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    }
  ]);

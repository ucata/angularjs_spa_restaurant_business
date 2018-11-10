// (function () {
// 'use strict'
//
// angular.module('myFirstApp', [])
//  .controller('MyFirstController', function ($scope) {
//      $scope.name = "";
//      $scope.nameLength = 0;
//
//      $scope.displayLengthName = function () {
//          var totalNameLength = calculateLength($scope.name);
//          $scope.nameLength = totalNameLength;
//      }
//
//      function calculateLength (name) {
//          var sum = 0;
//          for (var i=0; i < name.length; i++)
//              sum ++;
//
//          return sum;
//      }
//  });
// })();

(function () {
    'use strict'

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    function DIController($scope, $filter) {
        $scope.name = "";

        $scope.upper = function () {
            var upperCase = $filter('uppercase');
            $scope.name = upperCase($scope.name);
        }
    }


})();

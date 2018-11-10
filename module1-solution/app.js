(function () {
    'use strict'

    angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.eatItems = "";

        $scope.checkIfTooMuch = function() {
            var totalArr = 0;
            var arrays = [];

            if(!$scope.eatItems)
                $scope.message = "Please enter data first";
            else if($scope.eatItems) {
                totalArr = splitItems($scope.eatItems);
                totalArr = moreOrLess(totalArr);
            }
        }

        function splitItems(arrays) {
            return arrays = $scope.eatItems.split(', ').length;
        }

        function moreOrLess(totalArr) {
            if (totalArr <= 3)
                $scope.message = "Enjoy!"
            else if(totalArr > 3)
                $scope.message = "Too much!";
        }

    }
})();

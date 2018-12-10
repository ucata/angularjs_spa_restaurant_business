(function () {
'use strict';

angular.module('MenuApp')
       .service('MenuDataService', MenuDataService)
       .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService ($http, ApiBasePath) {

       this.getAllCategories = function () {
              return $http ({
                     method: 'GET',
                     url: (ApiBasePath + '/categories.json')
              })
              .then(result => {
                     return result;
              });
       };

       this.getItemsForCategory = function (itemId) {
              return $http ({
                     method: 'GET',
                     url: (ApiBasePath + '/menu_items.json?category='),
                     params: {
                            category: itemId
                     }
              }).then (result => {
                     return result;
              });
       };


};
})();
(function () {
'use strict';

angular.module('NarrowItDownApp', [])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .directive('foundItems', FoundItemsDirective)
       .constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

       this.getMatchedMenuItems = function() {
              this.matchList = [];

              if(this.searchTerm) {
                     MenuSearchService.getMatchedMenuItems(this.searchTerm)
                            .then(response => {
                                   this.matchList = response;
                            })
                            .catch(error => {
                                   console.log("!!! Error: ", error);
                            });
              };              
       };
      
       this.removeMatch = function(index) {
              this.matchList.splice(index, 1);
       };
};

MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService ($http, ApiPath) {
       this.getMatchedMenuItems = function(searchTerm) {

              return $http({
                            method: 'GET',
                            url: (ApiPath)
                     })
                     .then(result => {
                            var data = result.data.menu_items;
                            var foundItems = [];

                            for(var index in data) {
                                   var termMatched = data[index];
                                   if(termMatched.description.includes(searchTerm)) {
                                          foundItems.push(termMatched);
                                   }
                            }

                            return foundItems;
                     })
                     .catch(error => {
                            console.log('!!! Error: ', error);
                     });
       };
}; 

function FoundItemsDirective() {
       var ddo = {
              templateUrl: 'src/foundItems.html',
              scope: {
                     items: '<',
                     onRemove: '&',
                     noItem: '<'
              },
              controller: "NarrowItDownController as ctrl",
              bindToController: true
       };

       return ddo;
};

})();
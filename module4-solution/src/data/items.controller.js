(function () {
'use strict';

angular.module('MenuApp')
       .controller('ItemListController', ItemListController);

ItemListController.$inject = ['MenuDataService', '$stateParams'];
function ItemListController (MenuDataService, $stateParams) {
    
    var promise = MenuDataService.getItemsForCategory($stateParams.itemId);

    promise.then(response => {
        this.items = response.data.menu_items;
    }).catch(error => {
        console.log("Something went wrong with the API!", error);
    });
};

})();
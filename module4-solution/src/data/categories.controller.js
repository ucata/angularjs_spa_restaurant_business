(function () {
'use strict';

angular.module('MenuApp')
       .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService', 'items'];
    function CategoriesController (MenuDataService, items) {
        
        var promise = MenuDataService.getAllCategories();

        promise.then(response => {
            this.items = response.data;
        }).catch(error => {
            console.log("Something went wrong with the API!", error);
        });
    };

})();
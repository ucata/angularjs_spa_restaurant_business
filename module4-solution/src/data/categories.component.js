(function () {
'use strict';

angular.module('MenuApp')
       .component('categoriesList', {
            templateUrl: 'src/menu-app/templates/categories.template.html',
            bindings: {
               items: '<',
           }
       });

})();
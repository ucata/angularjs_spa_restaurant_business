(function () {
'use strict';

angular.module('MenuApp')
        .component('menuApp', {
            bindings: {
                templateUrl: 'src/menu-app/templates/items.template.html',
                items: '<'
            }
        });

})();
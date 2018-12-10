(function () {
'use strict';

angular.module('MenuApp')
       .component('menuApp', {
           templateUrl: 'src/menu-app/menu-app.template.html',
           bindings: {
               items: '<'
           }
       });
})();
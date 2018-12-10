(function () {
'use strict';

angular.module('MenuApp')
       .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/menu-app/templates/home.template.html'
        })
        .state('categoriesList', {
            url: '/categories-list',
            templateUrl: 'src/menu-app/templates/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('categoriesItemList', {
            url: '/categories-item-list/{itemId}',
            templateUrl: 'src/menu-app/templates/items.template.html',
            controller: 'ItemListController as itemListCtrl',
            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getItemsForCategory();
                }]
            }
        });
};
})();
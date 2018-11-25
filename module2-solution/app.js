(function () {
'use strict'  

angular.module('ShoppingListCheckOff', [])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBoughtController', AlreadyBoughtController)
       .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
       var toBuy = this;

       toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
       toBuy.addToBoughtItems = function(itemIndex) {
              ShoppingListCheckOffService.addToBoughtItems(itemIndex);  
       };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
       var bought = this;
       bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
       var service = this;

       var boughtItems = [];
       var toBuyItems = [
       {
              name: 'cookies',
              quantity: 11
       },
       {
              name: 'eggs',
              quantity: 8
       },
       {
              name: 'oranges',
              quantity: 12
       },
       {
              name: 'apples',
              quantity: 30
       },
       {
              name: 'bananas',
              quantity: 6
       }
       ];

       service.getToBuyItems = function () {
              return toBuyItems;
       };

       service.getBoughtItems = function () {
              return boughtItems;
       };

       service.addToBoughtItems = function(itemIndex) {
              boughtItems.push(toBuyItems.splice(itemIndex, 1)[0]);
       };       
};

})();

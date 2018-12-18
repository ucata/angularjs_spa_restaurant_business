(function () {
'use strict';

angular.module('public')
       .controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService'];
function MyinfoController(MenuService) {
    this.user = MenuService.getUserInfo();

    this.isLogged = function () {
        if (this.user)
            return true;
        else
            return false;
    };
}
})();
(function () {
'use strict';

angular.module('public')
       .controller('LoginController', LoginController);

LoginController.$inject = ['MenuService'];
function LoginController(MenuService) {
    this.user = {};

    this.submit = function() {
        var loginUser = this.user;

        MenuService.getFavDish(this.user.favdish).then(function (response) {
            loginUser.userFavDish = response.data;
            MenuService.saveUserInfo(loginUser);
        });
    };

    this.dataSaved = function () {
        this.loggedUser = MenuService.getUserInfo();

        if (this.loggedUser)
            return true;
        else
            return false;
    };
}
})();
/**
 * Created by Daedalus on 8/10/2015.
 */

(function(){

    angular
        .module('onlineres')
        .controller('MainController', MainController);

    MainController.$inject = [];
    function MainController(){

        var mainVm = this;
        mainVm.active = 1;

        mainVm.setActive = function(n){
            mainVm.active = n;
        }

        mainVm.isActive = function(n){
            return mainVm.active === n;
        }
    }
})();

/**
 * Created by Daedalus on 8/12/2015.
 */

(function() {

    angular
        .module('settings')
        .controller('OwnerController', OwnerController);

    OwnerController.$inject = [];
    function OwnerController(){

        var ownVm = this;

        ownVm.active = 1;

        ownVm.setActive = function(n){
            ownVm.active = n;
        };

        ownVm.isActive = function(n){
            return ownVm.active === n;
        };

    }

})();
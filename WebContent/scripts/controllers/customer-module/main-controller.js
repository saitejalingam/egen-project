/**
 * Created by Daedalus on 8/10/2015.
 */

(function(){

    angular
        .module('onlineres')
        .controller('MainController', MainController);

    MainController.$inject = ['$modal'];
    function MainController($modal){

        var mainVm = this;
        mainVm.active = 1;

        mainVm.setActive = function(n){
            mainVm.active = n;
        };

        mainVm.isActive = function(n){
            return mainVm.active === n;
        };

        mainVm.login = function(){

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'templates/login-tmpl.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal',
                size: 'md',
                keyboard: true,
                resolve: {

                }
            });

            modalInstance.result.then(function(){
                console.log('Success');
            }, function(){
                console.log('Failed');
            });
        };

    }
})();

/**
 * Created by Daedalus on 8/10/2015.
 */

(function(){
    angular
        .module('onlineres')
        .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

            $scope.ok = function () {
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        });
})();

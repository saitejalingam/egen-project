/**
 * Created by Daedalus on 8/12/2015.
 */

(function(){
    angular
        .module('settings')
        .controller('NewModalController', NewModalController);

    NewModalController.$inject = ['$modalInstance','modalService'];
    function NewModalController($modalInstance, modalService) {

        var modal = this;
        modal.msg = "Add Reservation";

        modal.add = function(flag){
            if(flag){
                modalService.add(modal.newReservation).then(function(data){
                    console.log(data);
                    $modalInstance.close(modal.newReservation);
                }, function(err){
                    console.log(err);
                });
            }
        };

    }
})();

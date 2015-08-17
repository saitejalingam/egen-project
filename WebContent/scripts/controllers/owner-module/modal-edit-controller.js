/**
 * Created by Daedalus on 8/12/2015.
 */

(function(){
    angular
        .module('settings')
        .controller('EditModalController', EditModalController);

    EditModalController.$inject = ['$modalInstance', 'editResv', 'modalService'];
    function EditModalController($modalInstance, editResv, modalService) {

        var modal = this;
        modal.msg = "Save Changes";
        modal.newReservation = editResv;
        modal.newReservation.date = new Date(editResv.date);

        modal.add = function(flag){

            if(flag){
                modalService.remove(modal.newReservation.reservation_id).then(function(data) {
                    modalService.edit(modal.newReservation).then(function(){
                    	$modalInstance.close(modal.newReservation);
                    }, function(err){
                        console.log(err);
                    });
                }, function (err) {
                    console.log(err);
                })
            }

        };

    }
})();
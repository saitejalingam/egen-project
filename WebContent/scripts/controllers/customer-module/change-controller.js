/**
 * Created by Daedalus on 8/7/2015.
 */

(function(){

    angular
        .module('onlineres')
        .controller('ChangeController', ChangeController);

    ChangeController.$inject = ['mainService'];
    function ChangeController(mainService){

        var changeVm = this;

        changeVm.editFlag = false;
        changeVm.editedFlag = false;
        changeVm.error = false;

        changeVm.editReservation = function(flag){

            if(flag){
                changeVm.error = false;
                mainService.getByID(changeVm.editReserve.reservation_id).then(function(data){

                    if(data.reservation_id != null){
                        changeVm.editReserve = data;
                        changeVm.editReserve.date = new Date(data.date);
                        changeVm.editFlag = true;
                    } else
                        changeVm.error = true;

                }, function(err){
                    console.log(err);
                });
            }
        };

        changeVm.saveEdit = function(flag){

            if(flag){
                mainService.removeReservation(changeVm.editReserve.reservation_id).then(function(data) {
                    console.log(data);
                    mainService.addEdited(changeVm.editReserve).then(function(){
                        changeVm.editFlag = false;
                        changeVm.editedFlag = true;
                        changeVm.editReserve = null;
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
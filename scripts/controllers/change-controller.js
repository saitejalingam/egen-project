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

        changeVm.editReservation = function(flag){

            if(flag){
                mainService.getByID(changeVm.resv_id).then(function(data){
                    changeVm.editReserve = data;
                    changeVm.editFlag = true;
                }, function(err){
                    console.log(err);
                });
            }
        };

        changeVm.saveEdit = function(flag){

            if(flag){
                mainService.removeReservation(changeVm.resv_id).then(function(data) {
                    console.log(data);
                    mainService.addEdited(changeVm.resv_id, changeVm.editReserve).then(function(){
                        changeVm.editFlag = false;
                        changeVm.editedFlag = true;
                    }, function(){
                        console.log(err);
                    });
                }, function (err) {
                    console.log(err);
                })
            }
        };
    }
})();
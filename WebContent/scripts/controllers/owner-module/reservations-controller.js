/**
 * Created by Daedalus on 8/10/2015.
 */

(function(){

    angular
        .module('settings')
        .controller('ReservationsController', ReservationsController);

    ReservationsController.$inject = ['$modal', 'resvService'];
    function ReservationsController($modal, resvService){

        var resv = this;

        resvService.getList().then(function(data){
            resv.list = data;
        }, function(err){
            console.log(err);
        });

        resv.addReservation = function(){

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'owner-add-resv.html',
                controller: 'NewModalController',
                controllerAs: 'modal',
                size: 'md',
                keyboard: true,
                resolve: {

                }
            });

            modalInstance.result.then(function(newResv){
                console.log('Success');
                resv.list.push(newResv);
            }, function(){
                console.log('Failed');
            });

        };


        resv.editReservation = function(id){

            resvService.getByID(id).then(function(data){
                resv.newReservation = data;
                console.log(data);

                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'owner-add-resv.html',
                    controller: 'EditModalController',
                    controllerAs: 'modal',
                    size: 'md',
                    keyboard: true,
                    resolve: {
                        editResv: function(){
                            return resv.newReservation;
                        }
                    }
                });

                modalInstance.result.then(function(newRes){
                    
                	for(var i = 0, len = resv.list.length; i<len; i++){
                		if(resv.list[i].reservation_id == newRes.reservation_id){
                			resv.list.splice(i, 1);
                			newRes.date = newRes.date.toDateString();
                			resv.list.push(newRes);
                		}

                        resv.newReservation = null;
                    }
                }, function(){
                    resv.newReservation = null;
                    console.log('Failed');
                });

            }, function(err){
                console.log(err);
            });
        };

    }
})();

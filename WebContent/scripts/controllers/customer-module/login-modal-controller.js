/**
 * Created by Daedalus on 8/10/2015.
 */

(function(){
    angular
        .module('onlineres')
        .controller('ModalInstanceCtrl', ModalController);

        ModalController.$inject = ['$modalInstance', 'loginService'];
        function ModalController($modalInstance, loginService) {

            var modal = this;
            modal.validate = function(flag){
                if(flag){
                    modal.error = false;
                	loginService.authenticate(modal.info).then(function(data){
                		if(data){
                			console.log(data);
                			$modalInstance.close();
                            window.location.assign('http://localhost:8080/OnlineResv/templates/settings.html');
                		} else
                            modal.error = true;
                    }, function(err){
                		console.log(err);
                	});
                }
            };

        }
})();

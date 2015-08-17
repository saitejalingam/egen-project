/**
 * Created by Daedalus on 8/12/2015.
 */

(function(){
    angular
        .module('settings')
        .service('modalService', ModalService);

    ModalService.$inject = ['$http','$q'];
    function ModalService($http, $q) {
        var self = this;

        self.add = function(data){

            var newPromise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/reservation/new',
                data: data,
                cache: false
            }).success(function(data){
                console.log(data);

                newPromise.resolve(data);
            }).error(function(err){
                console.log(err);
                newPromise.reject(err);
            });

            return newPromise.promise;
        };

        self.edit = function(data){
            var editPromise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/reservation/edit',
                cache: false,
                data: data
            }).success(function(data){
                console.log(data);
                editPromise.resolve(data);
            }).error(function(err){
                console.log(err);
                editPromise.reject(err);
            });

            return editPromise.promise;
        };

        self.remove = function(id) {
            var removePromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/reservation/delete/'+id,
                cache: false
            }).success(function(data){
                console.log(data);
                removePromise.resolve(data);
            }).error(function(err){
                console.log(err);
                removePromise.reject(data);
            });

            return removePromise.promise;
        };

    }
})();

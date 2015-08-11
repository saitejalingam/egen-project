/**
 * Created by Daedalus on 8/9/2015.
 */

(function(){

    angular
        .module('onlineres')
        .service('mainService', mainServiceFn);

    mainServiceFn.$inject = ['$http', '$q'];
    function mainServiceFn($http, $q){
        var self = this;

        self.addReservation = function(obj) {
            var newPromise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/Project/api/reservation/new',
                data: obj,
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

        self.getByID = function(obj){
            var reservationPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/Project/api/reservation/get/'+obj,
                cache: false
            }).success(function(data){
                console.log(data);
                reservationPromise.resolve(data);
            }).error(function(err){
                console.log(err);
                reservationPromise.reject(data);
            });

            return reservationPromise.promise;
        };

        self.getAll = function(){
            var reservationsPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/Project/api/reservation/get',
                cache: false
            }).success(function(data){
                reservationsPromise.resolve(data);
                console.log(data);
            }).error(function(err){
                console.log(err);
                reservationsPromise.reject(err);
            });

            return reservationsPromise.promise;
        };

        self.removeReservation = function(id){
            var removePromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/Project/api/reservation/delete/'+obj,
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

        self.addEdited = function(id, obj){
            var editPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/Project/api/reservation/edit/'+obj,
                cache: false
            }).success(function(data){
                console.log(data);
                editPromise.resolve(data);
            }).error(function(err){
                console.log(err);
                editPromise.reject(data);
            });

            return editPromise.promise;
        };
    }


})();
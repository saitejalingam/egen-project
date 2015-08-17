/**
 * Created by Daedalus on 8/12/2015.
 */

(function(){

    angular
        .module('settings')
        .service('resvService', resvServiceFn);

    resvServiceFn.$inject = ['$http', '$q'];
    function resvServiceFn($http, $q){
        var self = this;

        self.getList = function() {
            var newPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/reservation/get',
                cache: false
            }).success(function(data){
                console.log(data);
                newPromise.resolve(data);
            }).error(function(err){
                newPromise.reject(err);
            });

            return newPromise.promise;
        };

        self.getByID = function(id){
            var reservationPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/reservation/get/'+id,
                cache: false
            }).success(function(data){
                console.log(data);
                reservationPromise.resolve(data);
            }).error(function(err){
                console.log(err);
                reservationPromise.reject(err);
            });

            return reservationPromise.promise;
        };

    }
})();
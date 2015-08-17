
(function(){

    angular
        .module('onlineres')
        .service('loginService', loginServiceFn);

    loginServiceFn.$inject = ['$http', '$q'];
    function loginServiceFn($http, $q){
        var self = this;

        self.authenticate = function(obj) {
            var newPromise = $q.defer();
            
            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/user/login',
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
    }
})();
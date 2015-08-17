/**
 * Created by Daedalus on 8/14/2015.
 */
(function(){

    angular
        .module('settings')
        .service('settingsService', settingsServiceFn);

    settingsServiceFn.$inject = ['$http', '$q'];
    function settingsServiceFn($http, $q){
        var self = this;


        self.getProfile = function(){
            var Promise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/settings/profile',
                cache: false
            }).success(function(data){
                Promise.resolve(data);
            }).error(function(err){
                console.log(err);
                Promise.reject(err);
            });

            return Promise.promise;
        };

        self.updateProfile = function(obj){
            var Promise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/settings/updateProfile',
                cache: false,
                data: obj
            }).success(function(data){
                console.log(data);
                Promise.resolve(data);
            }).error(function(err){
                console.log(err);
                Promise.reject(err);
            });

            return Promise.promise;
        };

        self.getSettings = function(){
            var Promise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/settings/get',
                cache: false
            }).success(function(data){
                Promise.resolve(data);
            }).error(function(err){
                console.log(err);
                Promise.reject(err);
            });

            return Promise.promise;
        };

        self.updateSettings = function(obj){
            var Promise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/settings/update',
                cache: false,
                data: obj
            }).success(function(data){
                console.log(data);
                Promise.resolve(data);
            }).error(function(err){
                console.log(err);
                Promise.reject(err);
            });

            return Promise.promise;
        };

        self.getMailingList = function() {
            var newPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/settings/mail',
                cache: true
            }).success(function(data){
                newPromise.resolve(data);
            }).error(function(err){
                newPromise.reject(err);
            });

            return newPromise.promise;
        };

        self.getContactList = function(){
            var newPromise = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8080/OnlineResv/api/settings/contact',
                cache: true
            }).success(function(data){
                newPromise.resolve(data);
            }).error(function(err){
                newPromise.reject(err);
            });

            return newPromise.promise;
        };

        self.changeUser = function(obj){
            var newPromise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/settings/username',
                data: obj,
                cache: false
            }).success(function(data){
                newPromise.resolve(data);
            }).error(function(err){
                newPromise.reject(err);
            });

            return newPromise.promise;
        };

        self.changePass = function(obj){
            var newPromise = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/OnlineResv/api/settings/password',
                data: obj,
                cache: false
            }).success(function(data){
                newPromise.resolve(data);
            }).error(function(err){
                newPromise.reject(err);
            });

            return newPromise.promise;
        };
    }
})();
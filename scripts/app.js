/**
 * Created by Daedalus on 8/10/2015.
 */
(function(){

    angular
        .module('onlineres', ['ui.router', 'ui.bootstrap', 'ngMessages'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function moduleConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/new");

        $stateProvider
            .state('new', {
                url: "/new",
                templateUrl: "templates/new-form-tmpl.html",
                controller: "NewController as newVm"
            })
            .state('change', {
                url: "/change",
                templateUrl: "templates/change-form-tmpl.html",
                controller: "ChangeController",
                controllerAs: "changeVm"
            })
            .state('change.details', {
                url: "/details",
                templateUrl: "templates/change-details-tmpl.html",
                controller: "ChangeController"
            })
    }


})();
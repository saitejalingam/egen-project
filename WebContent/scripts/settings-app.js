/**
 * Created by Daedalus on 8/12/2015.
 */
(function(){

    angular
        .module('settings', ['ui.router', 'ui.bootstrap', 'ngMessages'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function moduleConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/reservations");

        $stateProvider
            .state('reservations', {
                url: "/reservations",
                templateUrl: "resv-list-tmpl.html",
                controller: "ReservationsController",
                controllerAs: "resvVm"
            })
            .state('settings', {
                url: "/settings",
                templateUrl: "settings-tmpl.html",
                controller: "SettingsController",
                controllerAs: "setVm"
            })
    }

})();
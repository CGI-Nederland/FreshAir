(function () {
    'use strict';
    var controllerId = 'logout';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', 'AuthenticationService', loginCtrl]);

    function loginCtrl($location, common, datacontext, AuthenticationService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = "Logout";
        vm.message = "You are logged out";

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { 
                    log('Activated Login View'); 
                    AuthenticationService.logout();
                    $location.path('/login'); 
                });
        }
    }
})();

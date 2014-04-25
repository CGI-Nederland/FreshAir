(function () {
    'use strict';
    var controllerId = 'login';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', 'AuthenticationService', loginCtrl]);

    function loginCtrl($location, common, datacontext, AuthenticationService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = "Login";
        vm.credentials = { username: "", password: "" };

        vm.validate = function() {
        	if (AuthenticationService.login(vm.credentials)) {
        		$location.path('/home');
        	}
        };

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Login View'); });
        }
    }
})();

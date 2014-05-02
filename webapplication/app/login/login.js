(function () {
    'use strict';
    var controllerId = 'login';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', 'AuthenticationService', loginCtrl]);

    function loginCtrl($location, common, datacontext, AuthenticationService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = "Logon to Fresh";
        vm.credentials = { username: "", password: "" };
        vm.error = ""

        vm.validate = function() {
            //check a field to make sure username is filled in
            if(vm.credentials.username == '') 
            {
                alert('Please fill out your Fresh & Honest Club number.');
                return false;
            }
            //help
            if(vm.credentials.username == 'help') 
            {
                alert('UID= 123.456.789.0 and password = abcd');
                return false;
            }


            //check a field to make sure password is filled in
            if(vm.credentials.password == '')
            {
                alert('Please fill out your password.');
                return false;
            }



        	//AuthenticationService.login(vm.credentials)) {
        	//	$location.path('/home');
        	//}
            AuthenticationService.login(vm.credentials).then(function(x){
                console.debug('login ok: ' + x);
                $location.path('/home');
            },function(err){
                console.error('login nok: ' + err);
                //debugger;
                alert( err.message );
                vm.error = err.message;
            });
        };

        vm.reset = function() {
            vm.credentials.username = "";
            vm.credentials.password = "";
        }

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Login View'); });
        }
    }
})();

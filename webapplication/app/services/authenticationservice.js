(function () {
    'use strict';

    var serviceId = 'AuthenticationService';
    angular.module('app').factory(serviceId, ['$http', '$location', 'SessionService','datacontext', 'common', authservice]);

    function authservice($http, $location, SessionService, datacontext, common) {
 
        var cacheSession = function(value) {
            SessionService.set('authenticated', value);
        };
        var uncacheSession = function() {
            SessionService.unset('authenticated');
        };
        return {
            login: function(credentials) {
                var login = datacontext.login(credentials);
                //debugger;
                login.then(cacheSession);
                return login;
            },
            logout: function() {
                var logout = datacontext.logout();
                logout.then(uncacheSession);
                return logout;
            },
            isLoggedIn: function() {
                var v = SessionService.get('authenticated');
                var b = (v === "true");
                return b.valueOf();
            }
        }; 

    };

})();

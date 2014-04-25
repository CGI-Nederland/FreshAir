(function () {
    'use strict';

    var serviceId = 'AuthenticationService';
    angular.module('app').factory(serviceId, ['$http', '$location', 'SessionService','datacontext', 'common', authservice]);

    function authservice($http, $location, SessionService, datacontext, common) {
 
        var cacheSession = function() {
            SessionService.set('authenticated', true);
        };
        var uncacheSession = function() {
            SessionService.unset('authenticated');
        };
        return {
            login: function(credentials) {
                var login = datacontext.login(credentials);
                login.success(cacheSession);
                return login;
            },
            logout: function() {
                var logout = datacontext.logout();
                logout.success(uncacheSession);
                return logout;
            },
            isLoggedIn: function() {
                return SessionService.get('authenticated');
            }
        }; 

    };

})();

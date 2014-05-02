(function () {
    'use strict';

    var serviceId = 'AuthenticationService';
    angular.module('app').factory(serviceId, ['$http', '$location', 'SessionService','datacontext', 'common', authservice]);

    function authservice($http, $location, SessionService, datacontext, common) {
 
        var cacheSession = function(value) {
            console.log('cache session');
            SessionService.set('authenticated', value);
            return value;
        };
        var uncacheSession = function() {
            SessionService.unset('authenticated');
        };
        return {
            login: function(credentials) {
                var login = datacontext.login(credentials);
                //debugger;
                return login.then(cacheSession, function(err) { 
                    console.error('bypass'); 
                    //return common.$q.reject(err); 
                    throw new Error(err);
                });
            },
            logout: function() {
                var logout = datacontext.logout();
                return logout.then(uncacheSession);
            },
            isLoggedIn: function() {
                var v = SessionService.get('authenticated');
                var b = (v === "true");
                return b.valueOf();
            }
        }; 

    };

})();

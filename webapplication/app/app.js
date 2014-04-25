(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)




        // Custom modules 
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
        'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);
    

    app.factory("SessionService", function() {
        return {
            get: function(key) {
                return sessionStorage.getItem(key);
            },
            set: function(key, val) {
                return sessionStorage.setItem(key, val);
            },
            unset: function(key) {
                return sessionStorage.removeItem(key);
            }
        };  
    });

    app.factory("AuthenticationService", function($http, $location, SessionService, datacontext) {
        var cacheSession = function() {
            SessionService.set('authenticated', true);
        };
        var uncacheSession = function() {
            SessionService.unset('authenticated');
        };
        return {
            login: function(credentials) {
                if (datacontext.login(credentials)) {
                    cacheSession();
                    return true;
                } else {
                    return false;
                }

            },
            logout: function() {
                uncacheSession();
            },
            isLoggedIn: function() {
                return SessionService.get('authenticated');
            }
        };  
    });

    // Handle routing errors and success events
    app.run(['$route', '$rootScope', '$location', 'AuthenticationService',   function ($route, $rootScope,  $location, auth) {
            
            $rootScope.$on('$routeChangeStart', function(event, next, current) {
                if ($location.path() !== '/login' && !auth.isLoggedIn()) {
                    $location.path('/login');
                }
            });
        }]);        
})();
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

    // Handle routing errors and success events
    app.run(['$route', '$rootScope', '$location', 'AuthenticationService',   function ($route, $rootScope,  $location, auth) {
            
            $rootScope.$on('$routeChangeStart', function(event, next, current) {
                if ($location.path() !== '/login' && !auth.isLoggedIn()) {
                    $location.path('/login');
                }
            });
        }]);        
})();
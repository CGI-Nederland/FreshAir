(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/login' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/home',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/search',
                config: {
                    title: 'search',
                    templateUrl: 'app/search/search.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-search"></i> Search flight'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            },
            {
                url: '/login',
                config: {
                    title: 'login',
                    templateUrl: 'app/login/login.html'
                   
                }
            },
            {
                url: '/logout',
                config: {
                    title: 'logout',
                    templateUrl: 'app/logout/logout.html',
                    settings: {
                        nav: 9,
                        content: '<i class="fa fa-key"></i> Logout'
                    }
                }
            }
        ];
    }
})();
(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['$http', 'common', datacontext]);

    function datacontext($http, common) {
        var $q = common.$q;
        

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getAirports: getAirports,
            getAgeRanges: getAgeRanges,
            login: login, 
            logout: logout
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            // var people = [
            //     { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
            //     { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
            //     { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
            //     { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
            //     { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
            //     { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
            //     { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            // ];
            // return $q.when(people);
            return $http.get('/api/persons.json').then(function(response){ return response.data; });
        }


        function getAirports() {
            var airports = [
                { name: 'Amsterdam', code:'AMS' },
                { name: 'Paris (Charles de Gaulles)', code:'CDG' },
                { name: 'Paris (Orly)', code:'ORY' }
            ];
            return $q.when(airports);
        }

        function getAgeRanges() {
            var ages = { 
                adults: [1,2,3,4,5,6,7],
                children: [0,1,2,3,4,5,6],
                infants: [0,1,2,3,4]
            };
            
            return $q.when(ages);
        }

        function login(credentials) {
            var deferred = $q.defer();
            
            if (credentials.username==='123.456.789.0' && credentials.password==='abcd')
            {
                console.log('user ok');
                deferred.resolve(true);
            } else {
                console.log('user nok');
                deferred.reject('Invalid user-id or password.');
            }
            return deferred.promise;

        }
        function logout() {
            return $q.when(true);

        }
    }
})();
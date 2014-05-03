// bookingService

(function () {
    'use strict';

    var serviceId = 'bookingservice';
    angular.module('app').factory(serviceId, ['common', bookingservice]);

    function bookingservice(common) {
        var $q = common.$q;
        var query = null;
        var flights = [];

        var service = {
            searchFlights: searchFlights
        };

        return service;


        function searchFlights(queryarguments) {
        	query = queryarguments;
        	
        	return $q.when();

        }
    }
})();		

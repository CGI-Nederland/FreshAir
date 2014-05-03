// search .js

(function () {
    'use strict';
    var controllerId = 'search';
    angular.module('app').controller(controllerId, ['$scope', '$location', 'common', 'datacontext', 'bookingservice', search]);

    function search($scope, $location, common, datacontext, bookingservice) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Honest Flight Search';
        vm.airports = [];
        vm.ageranges = {};

        vm.adt = 2;
        vm.chd = 0;
        vm.inf = 0;

        

        // Datepicker general stuff        
        $scope.dateOptions = {
            "constrainInput": false,
            'year-format': "'yyyy'",
            'dateFormat': "yyyy/MM/dd",
            'formatMonth': 'MM',
            'starting-day': 1
        };
        $scope.dateFormat = "yyyy/MM/dd";
        $scope.showWeeks = false;
        $scope.toggleWeeks = function () {
            $scope.showWeeks = ! vm.showWeeks;
        };
        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();

        // departure date picker
        $scope.departure = {}
        $scope.departure.opened = false;
        $scope.departure.today = function() {
            this.date = new Date();
        };
        
        $scope.departure.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened = ! this.opened;
        };
        $scope.departure.clear = function () {
            this.date = null;
        };
        $scope.departure.date = new Date();

        // returning date picker
        $scope.returning = {}
        $scope.returning.opened = false;
        $scope.returning.today = function() {
            this.date = new Date();
        };
        $scope.returning.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened = ! this.opened;
        };
        $scope.returning.clear = function () {
            this.date = null;
        };        
        $scope.returning.date = null;
        

        vm.searchFlights = function() {

            var searchQuery = {}
            searchQuery.departure = vm.departureCity;
            searchQuery.destination = vm.destinationCity;

            searchQuery.departingDate = $scope.departure.date;
            searchQuery.returnFlight = (vm.ret === 'YES');
            searchQuery.returningDate = $scope.returning.date;

            searchQuery.people = {}
            searchQuery.people.adults = vm.adt;
            searchQuery.people.children = vm.chd;
            searchQuery.people.infants = vm.inf;

            debugger;

            var d = moment().add('days', 14);
            log("search flights");

            if (  d.isAfter(searchQuery.departingDate) ) {
                debugger;
                alert('The bookingdate must be 14 days in the future');
                return;
            }

            var d = moment().add('days', 330);
            if( d.isBefore( searchQuery.departingDate) )
            {
                alert('The departing date must be at most 330 days in the future');
                return;
            }
        
            if ( searchQuery.returnFlight )
            {
                //check that the returndate niet eerder dan vandaag is
                if ( searchQuery.departingDate > searchQuery.returningDate ) 
                {
                    alert('Date of returnflight is incorrect!')
                    return;
                }
                
                if( d.isBefore(searchQuery.returningDate) )
                {
                    alert('The return date must be at most 330 days in the future');
                    return;
                }

            } else {

                if ( searchQuery.returningDate != null ) {
                    alert('return date can not be filled when returning flight is No');
                    return;
                }

            }

            bookingservice.searchFlights(searchQuery).then(function(){
                $location.path('/flightresults');
            });

            
        };

        activate();

        function activate() {
            var promises = [getAirports(), getAgeRanges()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Search View'); });
        }

        function getAirports() {
            return datacontext.getAirports().then(function (data) {
                return vm.airports = data;
            });
        }

        function getAgeRanges() {
            return datacontext.getAgeRanges().then(function (data) {
                return vm.ageranges = data;
            });
        }

    }
})();
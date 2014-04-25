// search .js

(function () {
    'use strict';
    var controllerId = 'search';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', search]);

    function search($location, common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Search';
        vm.airports = [];
        vm.ageranges = {};

        vm.adt = 2;

        // Datepicker general stuff        
        vm.dateOptions = {
            "constrainInput": false,
            'year-format': "'yyyy'",
            'starting-day': 1
        };
        vm.dateFormat = "dd-MM-yyyy";
        vm.showWeeks = false;
        vm.toggleWeeks = function () {
            vm.showWeeks = ! vm.showWeeks;
        };
        vm.toggleMin = function() {
            vm.minDate = ( vm.minDate ) ? null : new Date();
        };
        vm.toggleMin();

        // departure date picker
        vm.departure = {}
        vm.departure.opened = false;
        vm.departure.today = function() {
            this.date = new Date();
        };
        vm.departure.today();
        vm.departure.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened = ! this.opened;
        };
        vm.departure.clear = function () {
            this.date = null;
        };

        // returning date picker
        vm.returning = {}
        vm.returning.opened = false;
        vm.returning.today = function() {
            this.date = new Date();
        };
        vm.returning.today();
        vm.returning.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened = ! this.opened;
        };
        vm.returning.clear = function () {
            this.date = null;
        };        

        vm.searchFlights = function() {
            log("search flights");
            $location.path('/searchresults');
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
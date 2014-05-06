(function () {
    'use strict';
    var controllerId = 'searchresults';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', searchresults]);

    function searchresults($location, common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = "Flight Schedule";

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated SearchResults View'); });
        }

        vm.done = function() {
            $location.path('/home');
        };

        vm.newsearch = function() {
            $location.path('/search');
        };
    }
})();
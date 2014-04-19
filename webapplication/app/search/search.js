// search .js

(function () {
    'use strict';
    var controllerId = 'search';
    angular.module('app').controller(controllerId, ['common', search]);

    function search(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Search';

        vm.adt = 2;
        
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Search View'); });
        }
    }
})();
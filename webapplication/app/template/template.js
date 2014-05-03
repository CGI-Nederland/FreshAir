(function () {
    'use strict';
    var controllerId = '{{TEMPLATE}}';
    angular.module('app').controller(controllerId, ['common', 'datacontext', __template__]);

    function __template__(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        v.title = "TEMPLATE";

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated {{TEMPLATE}} View'); });
        }

        
    }
})();
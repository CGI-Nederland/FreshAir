(function () {
    'use strict';

    var serviceId = 'SessionService';
    angular.module('app').factory(serviceId, ['common', sessionservice]);

    function sessionservice(common) {
 
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
    };

})();
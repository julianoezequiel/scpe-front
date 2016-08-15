(function() {

    'use strict'

    angular
        .module('app.pages.auth.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$resource', 'constantesConfig'];

    function loginService($resource, constantesConfig) {
        console.log(constantesConfig.baseUrl);
        return $resource(constantesConfig.baseUrl + 'rest/user/:action', {}, {
            authenticate: {
                method: 'POST',
                params: {
                    'action': 'auth'
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        });
    }

})();

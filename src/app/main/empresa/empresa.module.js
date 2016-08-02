(function ()
{
    'use strict';

    angular
        .module('app.empresa', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.empresa', {
                url    : '/cadastro/empresa',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/empresa/empresa.html',
                        controller : 'EmpresaController as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/empresa');

        // Api
        msApiProvider.register('empresa', ['app/data/sample/sample.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('cadastro', {
            title : 'cadastro',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('cadastro.empresa', {
            title    : 'Empresa',
            icon     : 'icon-tile-four',
            state    : 'app.empresa',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_EMPRESA',
            weight   : 1
        });
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.empresas', [])
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
                        templateUrl: 'app/main/cadastros/empresas/empresa.html',
                        controller : 'EmpresaController as vm'
                    }
                }
            })
            .state('app.empresa.add', {
                url    : '/cadastro/empresa',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/empresas/empresa-gerenciamento.html',
                        controller : 'EmpresaControllerAdd as vm'
                    }
                }
            })
            .state('app.empresa.edt', {
                url    : '/cadastro/empresa/:id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/empresas/empresa-gerenciamento.html',
                        controller : 'EmpresaControllerEdt as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/cadastros/empresas');

        // Api
        msApiProvider.register('empresa', ['app/data/sample/sample.json']);

        msNavigationServiceProvider.saveItem('cadastro', {
            title    : 'Cadastros',
            icon     : 'icon-tile-four',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_CADASTROS',
            weight   : 1
        });

        msNavigationServiceProvider.saveItem('cadastro.empresa', {
            title    : 'Empresa',
            icon     : 'icon-factory',
            state    : 'app.empresa',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_EMPRESA',
            weight   : 1
        });


        msNavigationServiceProvider.saveItem('cadastro.departamento', {
            title: 'Departamento',
            state: 'app.cadastro_departamento',
            translate: 'SIDE_BAR.NAV_DEPARTAMENTO',
            icon:'icon-office'

        });

        msNavigationServiceProvider.saveItem('cadastro.operador', {
            title: 'Operador',
            state: 'app.cadastro_operador',
            translate: 'SIDE_BAR.NAV_OPERADOR',
           icon: "icon-account"

        });

        msNavigationServiceProvider.saveItem('cadastro.grupos', {
            title: 'Grupos de Acesso',
            state: 'app.cadastro_grupos_acesso',
            translate: 'SIDE_BAR.NAV_GRUPO_ACESSO',
            icon:"icon-account-multiple"

        });
    }
})();

(function ()
{
    'use strict';

    angular
        .module('app.cadastros', ['app.empresas','app.ui.icons'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {

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
            state: 'app.ui_icons',
            translate: 'SIDE_BAR.NAV_GRUPO_ACESSO',
            icon:"icon-account-multiple"

        });
    }
})();

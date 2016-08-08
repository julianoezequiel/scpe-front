(function() {
    'use strict';

    angular
      .module('app.empresas')
      .controller('EmpresaControllerAdd', EmpresaControllerAdd);

    EmpresaControllerAdd.$inject = ['$mdEditDialog', '$rootScope', '$timeout'];

    /** @ngInject */
    function EmpresaControllerAdd($mdEditDialog, $rootScope, $timeout) {
      var vm = this;

    }

  }

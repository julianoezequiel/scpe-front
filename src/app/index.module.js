(function() {
  'use strict';

  /**
   * Main module of the Fuse
   */
  angular
    .module('fuse', [

      // Core
      'app.core',

      // Navigation
      'app.navigation',

      // Toolbar
      'app.toolbar',

      // Quick panel
      'app.quick-panel',

      'app.dashboards',
      'app.cadastros',
      'app.arquivos-fiscais',
      'app.pages.auth.login'
    ]);
})();

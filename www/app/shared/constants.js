(function() {
  'use strict';

  angular
    .module('app')
    .constant('API', {
      url: 'http://localhost:3000'
    })
    .constant('Config', {
      environment: 'test'
    });

})();

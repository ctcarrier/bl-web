/*global define, angular */

'use strict';

// Declare here that angular is the US version - other locales can be easily substituted.

requirejs.config({
    // Packages = top-level folders; loads a contained file named "main.js"
    packages: ["common", "main", "user", "dashboard"],
    shim: {
      "jquery": {
        exports: "$"
      },
      "angular" : {
        exports : "angular",
        deps: ["jquery"]
      },
      "angular-route": ["angular"],
      "angular-resource": ["angular"],
      "myApp" : ["angular"],
      "services" : ["angular-resource"]
    },
    paths: {
      // You can also define a module here, e.g. a local module that doesn't support RequireJS
      // or map a longer path to a shorter name
    },
    priority: ["angular"]
  });

define('jquery', ['webjars!jquery.js'], function() {
    return $;
});

define('angular', ['webjars!angular-locale_en-us.js'], function() {
    return angular;
});

define('angular-resource', ['webjars!angular-resource.js'], function() {});

define('angular-route', ['webjars!angular-route.js'], function() {});

require(['angular', './controllers', './directives', './filters', './services','angular-resource', 'angular-route'],
  function(angular, controllers) {

// Declare app level module which depends on filters, and services

console.log("Creating app");
angular.module('myApp', ['myApp.filters', 'imageController', 'imageService', 'myApp.directives', 'angular-resource', 'angular-route']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/images', {templateUrl: 'partials/images.html', controller: ImageController});
    $routeProvider.otherwise({redirectTo: '/images'});
}]);
  
angular.bootstrap(document, ['myApp']);

});

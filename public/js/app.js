/*global define, angular */

'use strict';

// Declare here that angular is the US version - other locales can be easily substituted.

require(["angular", './controllers', './directives', './filters', './services', "ngRoute", "ngResource"],
  function(angular, controllers) {

// Declare app level module which depends on filters, and services

console.log("Creating app");
angular.module('myApp', ['myApp.filters', 'imageController', 'imageService', 'myApp.directives', 'ngResource', 'ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/images', {templateUrl: 'assets/partials/images.html', controller: 'ImageController'});
    $routeProvider.otherwise({redirectTo: '/images'});
}]);
  
angular.bootstrap(document, ['myApp']);

});
/*global define, angular */

'use strict';

// Declare here that angular is the US version - other locales can be easily substituted.

require(["angular", './controllers', './directives', './filters', './services', "ngRoute", "ngResource", "preloader", "jqueryModal"],
    function (angular, controllers) {

// Declare app level module which depends on filters, and services

        angular.module('myApp', ['myApp.filters', 'imageController', 'imageService', 'myApp.directives', 'ngResource', 'ngRoute']).
            config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider.when('/images/:imageId', {templateUrl: 'app/partials/viewImage.html', controller: 'ImageViewController'});
                $routeProvider.when('/random-image', {templateUrl: 'app/partials/images.html', controller: 'ImageController'});
                $routeProvider.otherwise({redirectTo: '/random-image'});

            }]);

        angular.bootstrap(document, ['myApp']);

    });

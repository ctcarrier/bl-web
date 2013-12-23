/*global define */

'use strict';

/* Services */

//define(['angular', 'angular-resource'],
//  function(angular) {
//
//
//angular.module('myApp.services', ['angular-resource'])
////  factory('Tag', function($resource){
////            return $resource('/api/tags/:_id', {'_id': '@_id'});
////    }).factory('ImageMeta', function($resource){
////              return $resource('/api/images/:_id', {'_id': '@_id'});
////  });
//
//  });

define(['angular', 'angular-resource'], function(angular){


var imageService = angular.module('imageService', ['ngResource']);

imageService.factory('Tag', ['$resource',
  function($resource){
    return $resource('/api/tags/:_id', {'_id': '@_id'});
  }]);

imageService.factory('Tag', ['$resource',
    function($resource){
      return $resource('/api/images/:_id', {'_id': '@_id'});
    }]);
    });
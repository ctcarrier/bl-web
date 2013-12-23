/*global define */

'use strict';

//define(function() {
//
///* Controllers */
//
//var controllers = {};
//
////controllers.Images = function($scope, $resource, $routeParams, ImageMeta, Tag) {
////    $scope.imageMeta = Trick.get({_id: 'random'});
////    $scope.tag = Tag.get({_id: 'random'});
////}
////controllers.Images.$inject = ['$scope', '$resource', '$routeParams', 'ImageMeta', 'Tag'];
//controllers.Images = function($scope, $resource, $routeParams) {
//}
//controllers.Images.$inject = ['$scope', '$resource', '$routeParams'];
//
//return controllers;
//
//});

console.log("Creating controllers");
define(['angular'], function(angular){
var imageController = angular.module('imageController', []);

imageController.controller('ImageController', ['$scope', '$http',
  function ($scope, $http) {
//    $http.get('phones/phones.json').success(function(data) {
//      $scope.phones = data;
//    });
//
//    $scope.orderProp = 'age';
  }]);
  });
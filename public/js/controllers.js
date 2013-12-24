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

imageController.controller('ImageController', ['$scope', '$resource', 'ImageMeta', 'Tag',
  function ($scope, $http, ImageMeta, Tag) {
    $scope.imageMeta = ImageMeta.get({_id: 'random'});
    $scope.tag = Tag.get({_id: 'random'}, function(){
        console.log("Formatting: " + $scope.tag.displayPattern + " " + $scope.tag.name);
        $scope.tag.answerText = $scope.tag.displayPattern.format($scope.tag.name);
        console.log("answerText: " + $scope.tag.answerText);
    });
  }]);
  });
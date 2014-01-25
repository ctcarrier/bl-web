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

imageController.controller('ImageController', ['$document', '$scope', '$resource', 'ImageMeta', 'Tag', 'TagResponse',
  function ($document, $scope, $http, ImageMeta, Tag, TagResponse) {

    $scope.init = function() {
        $scope.imageMeta = ImageMeta.get({_id: 'random'});
        $scope.tag = Tag.get({_id: 'random'});

         $scope.nextImageMeta = ImageMeta.get({_id: 'random'}, function(){
             $.preload([$scope.nextImageMeta.flickr.flickr_original_source]);
         });
         $scope.nextTag = Tag.get({_id: 'random'});
    };

    $scope.refreshImageContext = function(){
        //$scope.imageMeta = $scope.nextImageMeta;
        //$scope.tag = $scope.nextTag;

        $scope.imageMeta = ImageMeta.get({_id: 'random'});
         $scope.tag = Tag.get({_id: 'random'});
    };

    $document.keypress(function(keyEvent) {
        if (keyEvent.which === 121){
            $scope.sendPositive();
        }
        else if (keyEvent.which === 110){
            $scope.sendNegative();
        }
       });

    $scope.sendNegative = function() {
        var tagResponse = new TagResponse({tag: $scope.tag, imageMeta: $scope.imageMeta, response: false});
        tagResponse.$save();
        $scope.refreshImageContext();
    };
    $scope.sendPositive = function() {
        var tagResponse = new TagResponse({tag: $scope.tag, imageMeta: $scope.imageMeta, response: true});
        tagResponse.$save();
        $scope.refreshImageContext();
    };

    $scope.rotateLeft = function() {
        $("#mainImage").addClass("rotate270");
    };
    $scope.rotateRight = function() {
        $("#mainImage").addClass("rotate90");
    };

    $scope.goModal = function() {
        console.log("Going modal");
        $("#modal").modal({
            showClose: false
        });
        $.modal.resize()
    };

    $scope.refreshImageContext();
  }]);

  imageController.controller('ImageViewController', ['$document', '$scope', '$resource', 'ImageMeta', '$routeParams',
    function ($document, $scope, $http, ImageMeta, $routeParams) {

      $scope.init = function() {
          $scope.imageMeta = ImageMeta.get({_id: $routeParams.imageId});
      };

      $scope.goModal = function() {
          console.log("Going modal");
          $("#modal").modal({
              showClose: false
          });
          $.modal.resize()
      };

      $scope.init();
    }]);
  });
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
define(['angular'], function (angular) {
    var imageController = angular.module('imageController', []);

    imageController.controller('ImageController', ['$document', '$scope', '$resource', '$location', 'ImageMeta', 'Tag', 'TagResponse',
        function ($document, $scope, $http, $location, ImageMeta, Tag, TagResponse) {

            $scope.imageQ = [];
            $scope.tagQ = [];
            $scope.externalHost = $location.protocol() + '://' + $location.host() + '/#/images/'
            $scope.init = function () {
                $scope.fillQs();
            };

            $scope.refreshImageContext = function () {
                $scope.imageQ.shift();
                $scope.tagQ.shift();

                $document.body.scrollTop = $document.documentElement.scrollTop = 0;

                if ($scope.imageQ.length < 2){
                    $scope.fillQs();
                }
            };

            $scope.fillQs = function () {
                for (var i = 0; i < 3; i++) {
                    ImageMeta.get({_id: 'random', dt: new Date().getTime()}).$promise.then(function (randomImage) {
                        $scope.imageQ.push(randomImage);
                        new Image().src = randomImage.flickr.flickr_original_source;
                        console.log("Got next: " + randomImage.flickr.flickr_original_source);
                    });
                    Tag.get({_id: 'random', dt: new Date().getTime()}).$promise.then(function(randomTag){
                        $scope.tagQ.push(randomTag);
                    });
                }
            };

            $document.keypress(function (keyEvent) {
                if (keyEvent.which === 121) {
                    $scope.sendPositive();
                }
                else if (keyEvent.which === 110) {
                    $scope.sendNegative();
                }
            });

            $scope.sendNegative = function () {
                var tagResponse = new TagResponse({tag: $scope.tagQ[0], imageMeta: $scope.imageQ[0], response: false});
                tagResponse.$save();
                $scope.refreshImageContext();
            };
            $scope.sendPositive = function () {
                var tagResponse = new TagResponse({tag: $scope.tagQ[0], imageMeta: $scope.imageQ[0], response: true});
                tagResponse.$save();
                $scope.refreshImageContext();
            };

            $scope.rotateLeft = function () {
                $("#mainImage").addClass("rotate270");
            };
            $scope.rotateRight = function () {
                $("#mainImage").addClass("rotate90");
            };

            $scope.goModal = function () {
                console.log("Going modal");
                $("#modal").modal({
                    showClose: false
                });
                $.modal.resize()
            };
            $scope.goLinkModal = function () {
                console.log("Going modal");
                $("#modalLink").modal({
                    showClose: false
                });
                $.modal.resize()
            };
            $scope.getExternalLink = function () {
                return $scope.externalHost + $scope.imageQ[0].flickr.flickr_id;
            };

            $scope.init();
        }]);

    imageController.controller('ImageViewController', ['$document', '$scope', '$resource', 'ImageMeta', '$routeParams',
        function ($document, $scope, $http, ImageMeta, $routeParams) {

            $scope.init = function () {
                $scope.imageMeta = ImageMeta.get({_id: $routeParams.imageId});
            };

            $scope.goModal = function () {
                console.log("Going modal");
                $("#modal").modal({
                    showClose: false
                });
                $.modal.resize()
            };

            $scope.init();
        }]);
});
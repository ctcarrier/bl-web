var require = {
    shim: {
         "jquery": {
           exports: "$"
         },
         "angular" : {
           exports : "angular",
           deps: ["jquery"]
         },
         "ngRoute": ["angular"],
         "ngResource": ["angular"]
       },
       paths: {
         'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
         'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min',
         'ngResource': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular-resource.min',
         'ngRoute': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular-route.min',
       },
       priority: ["angular"]
       };

if (!String.prototype.format) {
  String.prototype.format = function() {

    var args = arguments;
    var sprintfRegex = /\{(\d+)\}/g;

    var sprintf = function (match, number) {
      return number in args ? args[number] : match;
    };

    return this.replace(sprintfRegex, sprintf);
  };
}
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
         "ngResource": ["angular"],
         "preloader": ["jquery"],
         "jqueryModal": ["jquery"]
       },
       paths: {
         'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
         'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min',
         'ngResource': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular-resource.min',
         'ngRoute': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular-route.min',
         'preloader': '/assets/js/lib/jquery.preload',
         'jqueryModal': '/assets/js/lib/jquery.modal.min'
       },
       priority: ["angular"]
       };
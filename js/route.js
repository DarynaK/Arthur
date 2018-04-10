var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/gallery.html"
    })
    .when("/about", {
        templateUrl : "view/about.html"
    })
    .when("/services", {
        templateUrl : "view/services.html"
    })
    .when("/contacts", {
        templateUrl : "view/contacts.html"
    });
});

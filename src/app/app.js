require('./styles.scss');
require('angular');
require('angular-material');
require('angular-material/angular-material.css');

var app = angular.module("myApp", ['ngMaterial']);

app.controller("myCtrl", function($scope) {
$scope.name = 'Hello World!!!'
});
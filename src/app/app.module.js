require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-ui-router');
require('./general.style.scss');
require('./app.style.scss');

var dependencies = ['ngMaterial', 'ui.router'];
var moduleName = 'myApp';
var ngModule = angular.module(moduleName, dependencies);

require('./app.component')(ngModule);
require('./components/viewOne/viewOne.component')(ngModule);
require('./components/viewTwo/viewTwo.component')(ngModule);
require('./styles.scss');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-ui-router');
require('angular');

var dependencies = ['ngMaterial', 'ui.router'];
var moduleName = 'myApp';
var ngModule = angular.module(moduleName, dependencies);

require('./config')(ngModule);
require('./component1/View1.component')(ngModule);
require('./component2/View2.component')(ngModule);
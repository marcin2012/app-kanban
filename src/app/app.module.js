require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-ui-router');
require('./general.style.scss');
require('./app.style.scss');
require('angular-drag-and-drop-lists-spiria');


var dependencies = ['ngMaterial', 'ui.router', 'dndLists'];
var moduleName = 'myApp';
var ngModule = angular.module(moduleName, dependencies);

require('./app.component')(ngModule);
require('./components/header/header.component')(ngModule);
require('./components/mainView/mainView.component')(ngModule);
require('./components/ticket/ticket.component')(ngModule);
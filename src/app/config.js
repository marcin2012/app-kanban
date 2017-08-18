function myConfig(ngModule) {
  ngModule.component('app', {
    template: require('./app.template.html')
  })
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/page1');

    $stateProvider.state('page1', {
      url: '/page1',
      template: '<first-component></first-component>'
    }).state('page2', {
      url: '/page2',
      template: '<second-component></second-component>'
    })
  }]);
}

module.exports = myConfig;
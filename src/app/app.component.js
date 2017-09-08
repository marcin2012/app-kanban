module.exports = function(ngModule) {
  ngModule.component('app', {
    template: require('./app.template.html'),
    controllerAs: "vm",
    controller: function () {

    }
  })
};
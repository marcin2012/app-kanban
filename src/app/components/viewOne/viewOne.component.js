require("./viewOne.style.scss");

module.exports = function (ngModule) {
  ngModule.component('firstComponent', {
    template: require('./viewOne.template.html'),
    controllerAs: "vm",
    controller: function () {
      var vm = this;
      vm.title = 'This is page 1';
    }
  });
};
require("./viewTwo.style.scss");

module.exports = function (ngModule) {
  ngModule.component('secondComponent', {
    template: require('./viewTwo.template.html'),
    controllerAs: "vm",
    controller: function () {
      var vm = this;
      vm.title = 'This is page 2';
    }
  });
};
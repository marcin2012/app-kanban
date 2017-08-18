function View2(ngModule) {
  ngModule.component('secondComponent', {
    template: require('./View2.template.html'),
    controllerAs: "vm",
    controller: function () {
      var vm = this;
      vm.title = 'This is page 2';
    }
  });
}

module.exports = View2;
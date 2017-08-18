function View1(ngModule) {
  ngModule.component('firstComponent', {
    template: require('./View1.template.html'),
    controllerAs: "vm",
    controller: function () {
      var vm = this;
      vm.title = 'This is page 1';
    }
  });
}

module.exports = View1;
require("./mainView.style.scss");

module.exports = function (ngModule) {
  ngModule.component('mainView', {
    template: require('./mainView.template.html'),
    controllerAs: "vm",
    controller: mainViewController
  });
};

function mainViewController() {
  var vm = this;

  vm.lists = [];

  vm.addList = function (list) {
    vm.lists.push({name: 'New list', tickets: []});
  };

  vm.addTicket = function (list) {
    list.tickets.push({});
  };

  vm.delete = function ($index, list) {
    list.tickets.splice($index, 1)
  };

  vm.deleteList = function ($index) {
    vm.lists.splice($index, 1)
  };
}
